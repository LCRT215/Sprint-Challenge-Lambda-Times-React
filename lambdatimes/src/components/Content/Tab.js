import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  const active = props.tab === props.selectedTab;
  //active variable created to connect tab to selectedtab from map in Tabs.

  return (
    <div
      className={` tab ${active ? "active-tab" : " "} `}
      //if active is true (if the the tab is selected) then the class name will be active-tab, else the class name will be empty. The tab class name will remain.

      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */

        props.selectTabHandler(props.tab);
        //passed in selecttabhandler from Tabs and pass in the current tab.
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;
