import { GiSettingsKnobs } from "react-icons/gi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureResolver } from "sanity/desk";
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
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['settings'].includes(listItem.getId() ?? ''))
    ])

export default deskStructure
