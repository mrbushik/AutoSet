import {StyledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const SearchIcon = ({ bg, color }) => (
	<StyledIcon
		iconBg={bg}
		iconColor={color}
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="30" height="30" rx="5" />
		<path d="M21.6464 22.3536C21.8417 22.5488 22.1583 22.5488 22.3536 22.3536C22.5488 22.1583 22.5488 21.8417 22.3536 21.6464L21.6464 22.3536ZM18.7286 18.0214C18.5333 17.8262 18.2167 17.8262 18.0214 18.0214C17.8262 18.2167 17.8262 18.5333 18.0214 18.7286L18.7286 18.0214ZM19.8333 13.6667C19.8333 17.0724 17.0724 19.8333 13.6667 19.8333V20.8333C17.6247 20.8333 20.8333 17.6247 20.8333 13.6667H19.8333ZM13.6667 19.8333C10.2609 19.8333 7.5 17.0724 7.5 13.6667H6.5C6.5 17.6247 9.70863 20.8333 13.6667 20.8333V19.8333ZM7.5 13.6667C7.5 10.2609 10.2609 7.5 13.6667 7.5V6.5C9.70863 6.5 6.5 9.70863 6.5 13.6667H7.5ZM13.6667 7.5C17.0724 7.5 19.8333 10.2609 19.8333 13.6667H20.8333C20.8333 9.70863 17.6247 6.5 13.6667 6.5V7.5ZM22.3536 21.6464L18.7286 18.0214L18.0214 18.7286L21.6464 22.3536L22.3536 21.6464Z" />
	</StyledIcon>
);