import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { GlobalStore } from "redux-micro-frontend";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchusers,
  fetchNew
} from "./user/userActions";

// const localStateChanged = () => {
//   console.log("State changed!");
// };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// Get an instance of Global Store
const sharedStore = GlobalStore.Get();

// Create/Register Store
sharedStore.RegisterStore("App1", store);
sharedStore.RegisterGlobalActions("App1", [
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchusers,
  fetchNew
]);

// Dispatch Action
//sharedStore.DispatchAction("App1", fetchNew);

// Subscribe to State
//sharedStore.Subscribe("App1", localStateChanged);

export default store;
