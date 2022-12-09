/* eslint-disable import/prefer-default-export */
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from '@/lib/sanity.api';
import settingsType from '@/schemas/settings';
import { settingsPlugin, settingsStructure } from '@/plugins/settings';

// import { settingsStructure } from '@/plugins/settings';

const config: any = {
  projectId,
  dataset,
  apiVersion,
  title: 'Flam Website',
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview”tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    settingsPlugin({ type: settingsType.name }),
  ],
  schema: {
    types: [settingsType],
  },
};

export default config;
