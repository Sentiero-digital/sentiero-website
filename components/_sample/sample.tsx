import {VFC} from "react";
import {SampleProps} from "@/components";

export const Sample: VFC<SampleProps> = props => {
  const {className = '', ...attrs} = props;
  return <div></div>
}