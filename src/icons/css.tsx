import * as svg from "./svg"

const cloud = (props: svg.SVGProps) => {

    const {

        stroke,

        className,

        ...rest

    } = props
    return (
        <svg.SVG className={className} p= "5px" width={props.width} height={props.height} viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path fill="#2D527C" d="M438.558,512H19.786c-8.214,0-14.876-6.66-14.876-14.876V256.916c0-8.216,6.661-14.876,14.876-14.876
	s14.876,6.66,14.876,14.876v225.332h389.021v-32.833c0-8.216,6.661-14.876,14.876-14.876c8.214,0,14.876,6.66,14.876,14.876v47.709
	C453.434,505.34,446.773,512,438.558,512z"/>
<g>
	<polygon fill="#CEE8FA" points="19.786,177.122 19.786,172.332 175.581,14.876 175.581,177.122 	"/>
	<rect x="196.155" y="219.435" fill="#CEE8FA;" width="296.061" height="163.65"/>
</g>
<g>
	<path fill="#2D527C" d="M492.216,204.559h-38.782V14.876C453.434,6.66,446.773,0,438.558,0H175.581
		c-0.18,0-0.357,0.021-0.536,0.027c-0.173,0.006-0.342,0.013-0.515,0.025c-0.64,0.046-1.276,0.118-1.9,0.244
		c-0.016,0.003-0.033,0.009-0.051,0.013c-0.614,0.126-1.215,0.303-1.807,0.506c-0.156,0.054-0.309,0.109-0.464,0.168
		c-0.585,0.222-1.159,0.469-1.712,0.762c-0.019,0.01-0.04,0.018-0.06,0.028c-0.57,0.306-1.111,0.662-1.638,1.041
		c-0.134,0.097-0.265,0.195-0.397,0.296c-0.522,0.403-1.029,0.829-1.498,1.303L9.21,161.868c-0.35,0.353-0.678,0.721-0.988,1.104
		c-0.207,0.254-0.388,0.521-0.576,0.784c-0.092,0.131-0.195,0.256-0.283,0.388c-0.213,0.323-0.403,0.656-0.588,0.991
		c-0.048,0.086-0.103,0.167-0.147,0.253c-0.181,0.342-0.339,0.695-0.491,1.047c-0.039,0.089-0.085,0.174-0.12,0.263
		c-0.138,0.338-0.253,0.681-0.364,1.025c-0.037,0.116-0.083,0.229-0.119,0.345c-0.094,0.315-0.165,0.634-0.238,0.954
		c-0.036,0.155-0.08,0.305-0.11,0.461c-0.057,0.292-0.091,0.586-0.131,0.881c-0.025,0.186-0.06,0.37-0.077,0.558
		c-0.027,0.286-0.031,0.573-0.043,0.86c-0.006,0.183-0.027,0.364-0.027,0.547v4.792c0,8.216,6.661,14.876,14.876,14.876H175.58
		c8.214,0,14.876-6.66,14.876-14.876V29.752h233.226v174.807H196.155c-8.214,0-14.876,6.66-14.876,14.876v163.644
		c0,8.216,6.661,14.876,14.876,14.876h296.061c8.215,0,14.876-6.66,14.876-14.876V219.435
		C507.092,211.219,500.43,204.559,492.216,204.559z M160.705,162.246H50.692l56.297-56.896l53.718-54.29v111.186H160.705z
		 M477.34,368.203H211.031V234.311H477.34V368.203z"/>
	<path fill="white" d="M277.819,271.832c-7.463,0-11.782,4.189-11.782,13.091v34.689c0,8.902,4.319,13.091,11.913,13.091
		c10.473,0,11.126-7.985,11.518-13.091c0.394-4.844,4.844-6.153,10.08-6.153c7.069,0,10.34,1.833,10.34,9.687
		c0,17.411-14.137,27.358-32.856,27.358c-17.148,0-31.417-8.378-31.417-30.893v-34.689c0-22.516,14.269-30.894,31.417-30.894
		c18.72,0,32.856,9.425,32.856,26.051c0,7.854-3.271,9.687-10.209,9.687c-5.498,0-9.949-1.44-10.211-6.153
		C289.338,280.211,288.945,271.832,277.819,271.832z"/>
	<path fill="white" d="M359.505,324.063c0-15.838-41.498-13.091-41.498-43.722c0-19.636,17.149-27.097,33.511-27.097
		c6.938,0,26.051,1.309,26.051,11.52c0,3.535-2.356,10.734-8.116,10.734c-4.713,0-7.2-4.975-17.934-4.975
		c-9.293,0-13.091,3.796-13.091,7.854c0,13.091,41.498,10.604,41.498,43.591c0,18.849-13.744,29.06-32.726,29.06
		c-17.149,0-31.549-8.378-31.549-17.017c0-4.451,3.929-10.996,8.902-10.996c6.153,0,10.078,9.687,22.253,9.687
		C352.828,332.703,359.505,330.347,359.505,324.063z"/>
	<path fill="white" d="M429.277,324.063c0-15.838-41.498-13.091-41.498-43.722c0-19.636,17.149-27.097,33.511-27.097
		c6.938,0,26.051,1.309,26.051,11.52c0,3.535-2.356,10.734-8.116,10.734c-4.713,0-7.2-4.975-17.934-4.975
		c-9.293,0-13.091,3.796-13.091,7.854c0,13.091,41.498,10.604,41.498,43.591c0,18.849-13.744,29.06-32.726,29.06
		c-17.149,0-31.549-8.378-31.549-17.017c0-4.451,3.929-10.996,8.902-10.996c6.153,0,10.078,9.687,22.253,9.687
		C422.601,332.703,429.277,330.347,429.277,324.063z"/>
</g>
        </svg.SVG>


    )
}
export default cloud