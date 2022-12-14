import {combineReducers} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
    uiState: {
      // hide side panel to disallow user customize the map
      readOnly: true,

      // customize which map control button to show
      mapControls: {
        visibleLayers: {
          show: false
        },
        mapLegend: {
          show: true,
          active: true
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        }
      }
    }
  });

const reducers = combineReducers({
 keplerGl: customizedKeplerGlReducer,
 app: appReducer
});
