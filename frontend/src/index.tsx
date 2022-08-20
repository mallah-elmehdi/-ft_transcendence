import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';
import { AppRoutes } from './routes';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <ColorModeScript />
        <AppRoutes />
    </React.StrictMode>
);
