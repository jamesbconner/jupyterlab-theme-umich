import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @jamcon/jupyterlab-theme-umich extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@jamcon/jupyterlab-theme-umich',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
        'JupyterLab extension @jamcon/jupyterlab-theme-umich is activated!'
    );
    const style = '@jamcon/jupyterlab-theme-umich/index.css';

    manager.register({
      name: 'Go Blue!',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
