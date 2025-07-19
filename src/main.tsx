import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/I18nConfig';

import "./index.css";

// Import the layouts
import RootLayout from './layouts/root-layout';
import IndexPage from './pages/index';
import { FAQPage } from "./pages/faq";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notFound";

type RootComponentProps = object

interface RootComponentState {
  router: ReturnType<typeof createBrowserRouter>;
}

class RootComponent extends Component<RootComponentProps, RootComponentState> {
  constructor(props: RootComponentProps) {
    super(props);

    this.state = {
      router: createBrowserRouter([
        {
          element: <RootLayout />,
          children: [
            { path: '/', element: <IndexPage /> },
            { path: '/faq', element: <FAQPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '*', element: <NotFoundPage /> },
          ],
        },
      ]),
    };
  }

  render() {
    return (
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <React.Suspense fallback='Loading...'>
            <RouterProvider router={this.state.router} />
          </React.Suspense>
        </I18nextProvider>
      </React.StrictMode>
    );
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<RootComponent />);
}
