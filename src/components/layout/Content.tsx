import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
// import IGroup from "../../interface/IGroup";
import Cleanlist from "../group/cleaning/cleaning-list";
import Marketlist from "../group/market/market-list";
import Urgentlist from "../group/urgent/urgent-list";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

function Content() {
  return <Cleanlist />;
}

export default Content;
