import {
    createIntegration,
    createComponent,
    FetchEventCallback,
    RuntimeContext,
} from '@gitbook/runtime';

import { addInkeepWidget } from '../InkeepConfig';

type IntegrationContext = {} & RuntimeContext;
type IntegrationBlockProps = { content?: string };
type IntegrationBlockState = { content: string };
type IntegrationAction = {};

const WIDGET_VERSION = '0.2.258';


const handleFetchEvent: FetchEventCallback<IntegrationContext> = async () => {
    return new Response(
        `
<html>
  <style>
    html, body {
      margin: 0;
      padding: 4px;
    }
  </style>
  <body>
    <script
      defer
      type="module"
      src="https://unpkg.com/@inkeep/widgets-embed@${WIDGET_VERSION}/dist/embed.js"
    ></script>
    <script type="module" defer>
      (${addInkeepWidget.toString()})()
    </script>
  </body>
</html>
`,
        {
            headers: {
                'Content-Type': 'text/html',
            },
        }
    );
};

const inkeepChatComponent = createComponent<
    IntegrationBlockProps,
    IntegrationBlockState,
    IntegrationAction,
    IntegrationContext
>({
    componentId: 'inkeep-widget',
    initialState: () => {
        return {
            content: ``,
        };
    },
    action: async () => {
        return {};
    },
    render: async (element, context) => {
        const { environment } = context;

        return (
            <block>
                <webframe
                    source={{
                        url: environment.integration.urls.publicEndpoint,
                    }}
                    aspectRatio={0.714286 / 1}
                    data={{
                        content: element.dynamicState('content'),
                    }}
                />
            </block>
        );
    },
});

export default createIntegration({
    fetch: handleFetchEvent,
    components: [inkeepChatComponent],
});
