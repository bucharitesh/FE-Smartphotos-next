/* eslint-disable import/prefer-default-export */
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from '@/lib/sanity.api';
import legal from '@/schemas/legal';

// import { settingsStructure } from '@/plugins/settings';

const config: any = {
  projectId,
  dataset,
  apiVersion,
  title: 'Flam Website',
  basePath: '/admin',
  plugins: [
    deskTool({
      // structure: settingsStructure(),
      // `defaultDocumentNode` is responsible for adding a “Preview”tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
  ],
  schema: {
    types: [
      legal
    ],
  },
};

export default config;
