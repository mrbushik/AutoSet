import { StyledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const Arrow = ({width, height})  => (
	<StyledIcon
    width={width ? width : 6} 
     height={height ? height : 14}
      viewBox="0 0 6 10" 
      fill="none"
       xmlns="http://www.w3.org/2000/svg"
	>
<path 
d="M5 9L1 5L5 1" 
stroke="#EE7500"

  />
	</StyledIcon>
);
