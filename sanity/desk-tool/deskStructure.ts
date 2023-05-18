import { GiGlobe, GiHomeGarage, GiHouse, GiJapaneseBridge, GiPaper, GiSettingsKnobs } from "react-icons/gi";
import Iframe from "sanity-plugin-iframe-pane";
import { DocumentListBuilder, StructureResolver } from "sanity/desk";
import { baseUrl } from "../env";

const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(GiSettingsKnobs)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Settings')
            .views([
              S.view.form(),
              S.view
                .component(Iframe)
                .options({
                  url: `${baseUrl}/api/preview`
                })
                .title('Preview')
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(GiGlobe)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Root Landing Page')
                .icon(GiHouse)
                .child(
                  S.document()
                    .schemaType('rootPage')
                    .documentId('root')
                    .title('Root Landing Page')
                ),
              S.listItem()
                .title('Pages')
                .icon(GiJapaneseBridge)
                .child(
                  S.documentTypeList('page')
                )
            ])
        ),


      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['settings'].includes(listItem.getId() ?? ''))
    ])

export default deskStructure
