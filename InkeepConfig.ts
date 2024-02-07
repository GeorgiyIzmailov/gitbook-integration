export const addInkeepWidget = () => {
    const inkeepDiv = document.createElement('div');
    inkeepDiv.classList.add('inkeep-container');
    inkeepDiv.id = 'inkeep';
    document.body.appendChild(inkeepDiv);

    Inkeep().embed({
        componentType: 'EmbeddedChat',
        targetElement: document.getElementById('inkeep'),
        properties: {
            baseSettings: {
                apiKey: 'YOUR_API_KEY', // required
                integrationId: 'YOUR_INTEGRATION_ID', // required
                organizationId: 'YOUR_ORGANIZATION_ID', // required
                primaryBrandColor: '#26D6FF',
                organizationDisplayName: 'Inkeep',
                // ...optional settings
                colorMode: {
                    forcedColorMode: 'dark', // options: 'light' or dark'
                },
                theme: {
                    components: {
                        AIChatPageWrapper: {
                            defaultProps: {
                                size: {
                                    base: 'expand',
                                    md: 'expand',
                                },
                                variant: 'no-shadow', // 'no-shadow' or 'container-with-shadow'
                            },
                        },
                    },
                },
            },
            aiChatSettings: {
                // ...optional settings
                quickQuestions: [
                    'Example question 1?',
                    'Example question 2?',
                    'Example question 3?',
                ],
                getHelpCallToActions: [
                    {
                        icon: { builtIn: 'FaSlack' },
                        name: 'Slack',
                        url: 'https://myorg.slack.com/C010101010',
                    },
                    {
                        icon: { builtIn: 'FaDiscord' },
                        name: 'Discord',
                        url: 'https://discord.com/invite/invidecode123',
                    },
                    {
                        icon: { builtIn: 'FaGithub' },
                        name: 'GitHub',
                        url: 'https://github.com/myorg/myrepo/discussions',
                    },
                ],
            },
            searchSettings: {
                // optional settings
            },
            modalSettings: {
                // optional settings
            },
        },
    });
};
