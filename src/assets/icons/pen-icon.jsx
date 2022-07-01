import { StyledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const PenIcon = ({bg, color, size })  => (
	<StyledIcon
    iconColor={color}
		iconBg={bg}
		width={size ? size : 10}
		height={size ? size : 10}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="14" height="14" fill="#393939"/>
<path d="M9.5649 2.4178C9.69736 2.28534 9.85461 2.18027 10.0277 2.10858C10.2007 2.0369 10.3862 2 10.5735 2C10.7609 2 10.9464 2.0369 11.1194 2.10858C11.2925 2.18027 11.4497 2.28534 11.5822 2.4178C11.7147 2.55026 11.8197 2.70751 11.8914 2.88057C11.9631 3.05364 12 3.23913 12 3.42645C12 3.61377 11.9631 3.79926 11.8914 3.97233C11.8197 4.14539 11.7147 4.30265 11.5822 4.4351L4.7738 11.2435L2 12L2.75649 9.22621L9.5649 2.4178Z" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round"/>
	</StyledIcon>
);