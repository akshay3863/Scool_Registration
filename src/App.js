import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Table from "./components/Table";
import InputFrom from "./components/InputFrom";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        {/* FILTER */}
        <div className="mb-3 mt-3">
          <h3>Registration From </h3>
        </div>
        <div className="row">
          {/* Input */}
          <div className="col-12 col-md-3">
            <InputFrom />
          </div>
          {/* Table */}
          <div className="col-12 col-md-9">
            <Table />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
