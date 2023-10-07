import React from "react";
import MyanmarCalendar from "../components/MyanmarCalendar";
import MyanmarCalendar2 from "@/components/MyanmarCalendar2";
import { Provider } from "react-redux";
import { store } from "@/store";
import AppSetupProvider from "@/components/providers/AppSetupProvider";

const Home = () => {
  return (
    <Provider store={store}>
      <AppSetupProvider>
        {/* <MyanmarCalendar /> */}
        <MyanmarCalendar2 />
      </AppSetupProvider>
    </Provider>
  );
};

export default Home;
