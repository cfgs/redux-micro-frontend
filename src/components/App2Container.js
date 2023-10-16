import React from "react";
import { GlobalStore } from "redux-micro-frontend";

function App2Container() {
  const printGlobalState = (state) => {
    //console.log("State changed from App2! ", getStore._globalActions.App1[4]);
    // console.log(
    //   "State changed from App2! ",
    //   getStore.GetGlobalState().App1.user.users
    // );
    //console.log("State changed from App2! ", state);
    console.log("State changed from App2! ", getStore);
  };

  // Get an instance of Global Store
  const getStore = GlobalStore.Get();

  // Subscribe to State
  getStore.Subscribe("App1", printGlobalState);

  // Dispatch Action
  //getStore.DispatchAction("App1", getStore._globalActions.App1[4]);

  return (
    <div>
      <div>
        <h2>Users List App2</h2>
        {/* <div>
          {userData &&
            userData.users &&
            userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div> */}
      </div>
    </div>
  );
}

export default App2Container;
