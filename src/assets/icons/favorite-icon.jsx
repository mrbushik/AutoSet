import {StyledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const FavoriteIcon = ({ bg, color }) => (
	<StyledIcon
		iconBg={bg}
		iconColor={color}
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="30" height="30" rx="5" fill="#2F2F2F" />
		<path
			d="M21 23L20.7024 23.4018C20.8541 23.5142 21.0563 23.5315 21.2249 23.4465C21.3936 23.3616 21.5 23.1889 21.5 23H21ZM15 18.5556L15.2976 18.1538C15.1208 18.0228 14.8792 18.0228 14.7024 18.1538L15 18.5556ZM9 23H8.5C8.5 23.1889 8.6064 23.3616 8.77506 23.4465C8.94372 23.5315 9.14586 23.5142 9.29761 23.4018L9 23ZM10.7143 7V6.5V7ZM19.2857 7V6.5V7ZM21.2976 22.5982L15.2976 18.1538L14.7024 18.9573L20.7024 23.4018L21.2976 22.5982ZM14.7024 18.1538L8.70239 22.5982L9.29761 23.4018L15.2976 18.9573L14.7024 18.1538ZM9.5 23V8.77778H8.5V23H9.5ZM9.5 8.77778C9.5 8.43314 9.63219 8.10612 9.86202 7.86777L9.14218 7.17363C8.72904 7.60208 8.5 8.17942 8.5 8.77778H9.5ZM9.86202 7.86777C10.0913 7.63004 10.3982 7.5 10.7143 7.5V6.5C10.121 6.5 9.55592 6.74457 9.14218 7.17363L9.86202 7.86777ZM10.7143 7.5H19.2857V6.5H10.7143V7.5ZM19.2857 7.5C19.6018 7.5 19.9087 7.63004 20.138 7.86777L20.8578 7.17363C20.4441 6.74457 19.879 6.5 19.2857 6.5V7.5ZM20.138 7.86777C20.3678 8.10612 20.5 8.43314 20.5 8.77778H21.5C21.5 8.17942 21.271 7.60208 20.8578 7.17363L20.138 7.86777ZM20.5 8.77778V23H21.5V8.77778H20.5Z"
			fill="#EE7500"
		/>
	</StyledIcon>
);
