type Props = {
	stroke?: string;
	rectSize?: number;
};

const SearchIcon = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={`${props.rectSize ?? 28}`}
			height={`${props.rectSize ?? 28}`}
			viewBox={`0 0 ${props.rectSize ?? 28} ${props.rectSize ?? 28}`}
		>
			<g id="main_search_icon" transform="translate(-1370 -35)">
				<rect
					id="사각형_228"
					data-name="사각형 228"
					width={`${props.rectSize ?? 28}`}
					height={`${props.rectSize ?? 28}`}
					transform="translate(1370 35)"
					fill="#711d1d"
					opacity="0"
				/>
				<g id="그룹_407" data-name="그룹 407">
					<g
						id="타원_54"
						data-name="타원 54"
						transform="translate(1372 37)"
						fill="transparent"
						stroke={props.stroke ?? '#7d4be3'}
						strokeWidth="2"
					>
						<circle cx="11" cy="11" r="11" stroke="none" />
						<circle cx="11" cy="11" r="10.5" fill="none" />
					</g>
					<path
						id="패스_252"
						data-name="패스 252"
						d="M11002.5,426.5l6.295,6.295"
						transform="translate(-9612 -371)"
						fill="none"
						stroke={props.stroke ?? '#7d4be3'}
						strokeLinecap="round"
						strokeWidth="2"
					/>
				</g>
			</g>
		</svg>
	);
};

export default SearchIcon;
