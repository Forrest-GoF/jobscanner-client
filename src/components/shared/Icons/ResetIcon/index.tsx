type Props = {
	stroke?: string;
	rectSize?: number;
};

const ResetIcon = (props: Props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			<g id="main_reset_icon" transform="translate(-1010 -271)">
				<rect
					id="사각형_97"
					data-name="사각형 97"
					width={props.rectSize ?? '20'}
					height={props.rectSize ?? '20'}
					transform="translate(1010 271)"
					fill="#af6666"
					opacity="0"
				/>
				<g id="그룹_143" data-name="그룹 143" transform="translate(1010.68 272)">
					<path
						id="패스_69"
						data-name="패스 69"
						d="M2.519,4.783A8.366,8.366,0,1,1,1,9.591"
						transform="translate(-0.372 -0.456)"
						fill="none"
						stroke={props.stroke ?? '#231f20'}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
					<path
						id="패스_70"
						data-name="패스 70"
						d="M7.007,4.835H3.172V1"
						transform="translate(-1.18 -0.372)"
						fill="none"
						stroke={props.stroke ?? '#231f20'}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</g>
			</g>
		</svg>
	);
};

export default ResetIcon;
