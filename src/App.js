import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

const SVG = ({
  style = {},
  fill = '#191e24',
  width = '100%',
  className = '',
  height = '100%',
  viewBox = '0 0 712.783 54.329',
}) => 
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M312.583,0c4.846,0,9.693,0,14.539,0c0,0.127,0,0.255,0,0.383
  c8.604,1.527,24.141-2.329,31.373,3.061c-0.754,1.167,0.428,0.431,0.766,0.765c2.237,2.219,5.067,7.593,5.355,11.478
  c0.268,3.596-0.846,8.085-2.678,11.095c-5.937,9.755-20.794,7.341-35.964,7.27c-0.662,6.098,0.042,13.561-0.765,19.513
  c-4.083-0.253-9.18,0.508-12.626-0.383C312.583,35.454,312.583,17.727,312.583,0z M316.792,13.391
  c1.065,0.613,1.058-1.652,0.382-1.531C317.054,12.378,316.63,12.591,316.792,13.391z M331.331,20.278c1.944,0.038,4.103,0,6.122,0
  c4.108,0,8.716,0.609,11.478-0.765c-7.524,0-15.049,0-22.573,0C327.274,20.947,329.604,20.244,331.331,20.278z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M196.273,33.286c3.708,6.24,6.502,13.393,9.565,20.278
  c-4.733-0.75-10.974,0.006-15.687-0.765c-3.646-5.409-6.504-11.606-8.8-18.365c-4.546-0.665-8.279-0.5-13.008-0.383
  c-1.069,5.69,0.281,13.799-0.765,19.513c-4.591,0-9.183,0-13.773,0c0-17.727,0-35.454,0-53.181
  c13.583,0.318,27.528,0.273,40.938,0.765c6.498,3.228,12.832,10.479,11.095,20.66C204.941,27.07,200.554,30.933,196.273,33.286z
  M185.561,4.591C186.004,6.103,186.004,3.08,185.561,4.591L185.561,4.591z M168.344,14.156c-0.607,1.082-0.607,4.275,0,5.356
  c3.625,0,8.757,0,13.391,0c4.342,0,10.467,1.476,10.33-3.443C186.644,12.946,176.463,14.582,168.344,14.156z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M117.075,0.765c0,4.846,0,9.692,0,14.539c-12.881,0-25.762,0-38.642,0
  c-0.518,1.655-0.18,2.428,0,4.208c7.206,1.722,17.814,0.04,25.634,1.147c0,4.591,0,9.183,0,13.774c-8.544,0-17.089,0-25.634,0
  c-0.77,1.144-0.216,3.609-0.383,5.356c12.659,1.18,25.793-0.479,39.025,0c0,4.591,0,9.182,0,13.773c-17.344,0-34.689,0-52.033,0
  c-0.636-16.708-0.639-36.09,0-52.799c14.906,0.338,31.506-0.448,47.06,0C113.873,0.816,115.508,1.441,117.075,0.765z
  M102.537,23.721c-0.004-0.386-0.67-0.481-0.765,0C101.853,24.184,102.196,23.957,102.537,23.721z M90.676,42.086
  C91.119,43.598,91.119,40.574,90.676,42.086L90.676,42.086z M83.024,42.469C83.467,43.98,83.467,40.957,83.024,42.469
  L83.024,42.469z M71.546,50.121C71.797,50.371,71.386,49.96,71.546,50.121L71.546,50.121z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M518.422,16.069c-5.102,0-10.203,0-15.305,0
  c-1.781,0.336,0.259-1.261-0.765-1.148c-7.672-0.635-18.438-2.667-23.722,1.53c-0.333,1.706,1.121,1.791,2.296,2.296
  c5.576,2.396,17.181-0.997,25.634,0.765c0.288,0.06,0.679,0.803,1.531,1.147c0.413,0.167,1.349-0.103,1.53,0
  c5.271,3.011,7.344,8.945,9.564,15.304c-1.436,1.358-1.04,3.262-0.383,5.356c-2.793,3.147-6.234,9.777-11.478,11.478
  c-4.685,1.52-11.772,0.765-18.747,0.765c-4.28,0-9.233,0.33-11.861-0.383c-1.898-0.515-3.592-3.042-5.738-2.678
  c-2.895-3.61-6.111-6.897-5.356-14.156c4.282,0.94,7.144-0.349,12.626,0c1.075,0.965,1.502,2.579,3.061,3.061
  c4.023-0.145,8.653,0.191,13.008,0c4.001-0.176,8.528,0.023,9.948-3.061c-1.475-3.883-6.331-3.042-9.948-3.061
  c-4.07-0.022-8.803,0.274-12.625,0c-5.015-0.359-10.531-2.131-13.009-5.356c-3.279-4.268-4.265-15.457-0.765-20.66
  c1.871-2.784,4.796-3.405,6.887-5.356c2.107,0.195,3.798-0.028,4.591-1.148c11.007,1.061,24.617-2.233,32.139,3.061
  c1.801,1.268,2.946,3.553,4.208,5.356C517.101,11.121,518.737,13.109,518.422,16.069z M483.223,3.443
  C483.667,4.955,483.667,1.932,483.223,3.443L483.223,3.443z M485.519,7.652c0.371-0.01,0.297-0.468,0.382-0.765
  c-0.382,0.765-0.956,0.574-0.956,0.574l0.191,0.574c0.095,0.481,0.761,0.386,0.765,0l-0.191-0.191L485.519,7.652z M469.067,16.452
  c-0.297,0.086-0.755,0.011-0.766,0.383C468.598,16.749,469.056,16.824,469.067,16.452z M484.753,22.191
  c-0.43,0.039-0.596-0.556-0.766,0C483.993,22.577,484.659,22.672,484.753,22.191z M474.041,23.338
  C474.292,23.589,473.88,23.178,474.041,23.338L474.041,23.338z M483.223,24.486c-0.297,0.086-0.755,0.011-0.766,0.383
  C482.754,24.783,483.212,24.858,483.223,24.486z M472.893,42.086C473.997,39.869,471.949,41.079,472.893,42.086L472.893,42.086z
  M485.519,41.703C485.961,43.215,485.961,40.191,485.519,41.703L485.519,41.703z M475.954,42.086
  C476.205,42.336,475.793,41.925,475.954,42.086L475.954,42.086z M482.458,42.086l0.446,0.574l0.702-0.191
  c0.169,0.34,0.336,0.684,0.765,0.765c-0.765-0.765-1.211-1.339-1.211-1.339L482.458,42.086z M486.667,42.086
  C486.917,42.336,486.506,41.925,486.667,42.086L486.667,42.086z M471.745,45.147C470.701,46.311,472.909,44.103,471.745,45.147
  L471.745,45.147z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M646.975,0.765c0,4.846,0,9.692,0,14.539c-12.881,0-25.762,0-38.643,0
  c-0.517,1.655-0.179,2.428,0,4.208c7.206,1.722,17.814,0.04,25.635,1.147c0,4.591,0,9.183,0,13.774c-8.545,0-17.09,0-25.635,0
  c-0.769,1.144-0.216,3.609-0.382,5.356c12.658,1.18,25.793-0.479,39.024,0c0,4.591,0,9.182,0,13.773c-17.344,0-34.688,0-52.033,0
  c-0.636-16.708-0.639-36.09,0-52.799c14.906,0.338,31.507-0.448,47.06,0C643.773,0.816,645.408,1.441,646.975,0.765z
  M632.437,23.721c-0.005-0.386-0.671-0.481-0.766,0C631.752,24.184,632.096,23.957,632.437,23.721z M620.576,42.086
  C621.019,43.598,621.019,40.574,620.576,42.086L620.576,42.086z M612.924,42.469C613.368,43.98,613.368,40.957,612.924,42.469
  L612.924,42.469z M601.446,50.121C601.697,50.371,601.286,49.96,601.446,50.121L601.446,50.121z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M712.017,16.069c-5.101,0-10.202,0-15.304,0
  c-1.782,0.336,0.258-1.261-0.766-1.148c-7.672-0.635-18.438-2.667-23.721,1.53c-0.333,1.706,1.12,1.791,2.296,2.296
  c5.576,2.396,17.18-0.997,25.634,0.765c0.287,0.06,0.678,0.803,1.53,1.147c0.413,0.167,1.35-0.103,1.53,0
  c5.271,3.011,7.344,8.945,9.565,15.304c-1.436,1.358-1.04,3.262-0.383,5.356c-2.793,3.147-6.235,9.777-11.478,11.478
  c-4.686,1.52-11.772,0.765-18.748,0.765c-4.28,0-9.232,0.33-11.86-0.383c-1.899-0.515-3.593-3.042-5.739-2.678
  c-2.894-3.61-6.11-6.897-5.356-14.156c4.283,0.94,7.145-0.349,12.626,0c1.075,0.965,1.502,2.579,3.061,3.061
  c4.024-0.145,8.653,0.191,13.009,0c4.001-0.176,8.527,0.023,9.947-3.061c-1.475-3.883-6.33-3.042-9.947-3.061
  c-4.07-0.022-8.804,0.274-12.626,0c-5.015-0.359-10.53-2.131-13.008-5.356c-3.279-4.268-4.265-15.457-0.766-20.66
  c1.872-2.784,4.797-3.405,6.887-5.356c2.108,0.195,3.799-0.028,4.591-1.148C684,1.826,697.609-1.468,705.13,3.826
  c1.802,1.268,2.946,3.553,4.209,5.356C710.696,11.121,712.332,13.109,712.017,16.069z M676.818,3.443
  C677.261,4.955,677.261,1.932,676.818,3.443L676.818,3.443z M679.114,7.652c0.372-0.01,0.297-0.468,0.383-0.765
  c-0.383,0.765-0.957,0.574-0.957,0.574l0.191,0.574c0.095,0.481,0.761,0.386,0.766,0l-0.191-0.191L679.114,7.652z M662.662,16.452
  c-0.297,0.086-0.754,0.011-0.765,0.383C662.194,16.749,662.652,16.824,662.662,16.452z M678.348,22.191
  c-0.429,0.039-0.595-0.556-0.765,0C677.588,22.577,678.254,22.672,678.348,22.191z M667.636,23.338
  C667.886,23.589,667.475,23.178,667.636,23.338L667.636,23.338z M676.818,24.486c-0.297,0.086-0.754,0.011-0.765,0.383
  C676.35,24.783,676.808,24.858,676.818,24.486z M666.488,42.086C667.591,39.869,665.543,41.079,666.488,42.086L666.488,42.086z
  M679.114,41.703C679.557,43.215,679.557,40.191,679.114,41.703L679.114,41.703z M669.548,42.086
  C669.799,42.336,669.388,41.925,669.548,42.086L669.548,42.086z M676.053,42.086l0.446,0.574l0.701-0.191
  c0.17,0.34,0.336,0.684,0.766,0.765c-0.766-0.765-1.212-1.339-1.212-1.339L676.053,42.086z M680.261,42.086
  C680.512,42.336,680.101,41.925,680.261,42.086L680.261,42.086z M665.34,45.147C664.296,46.311,666.504,44.103,665.34,45.147
  L665.34,45.147z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M128.936,21.043c0.254-6.505-0.509-14.028,0.382-19.895c4.081,0,8.162,0,12.243,0
  c0,17.472,0,34.944,0,52.416c-4.208,0-8.417,0-12.625,0c0-9.438,0-18.875,0-28.312l0.701,0.191l0.447-0.574
  c0.434-0.073,0.212-0.384,0-0.383l-0.191-0.957l-0.957,0.191c0-0.383,0-0.765,0-1.148l0.574,0.191l0.574-0.191
  c0.62,0.274,0.62-1.804,0-1.53l-0.574-0.191L128.936,21.043z M132.379,3.061C132.63,3.312,132.219,2.9,132.379,3.061L132.379,3.061
  z M132.762,25.634c0.127,0,0.255,0,0.382,0c-0.032-0.606,0.184-1.459-0.382-1.53c-0.203,0.308-0.399,0.621-0.383,1.147
  l-0.574-0.191l0.191,0.574c-0.07,0.325,0.149,0.361,0.383,0.382l0.574,0.191L132.762,25.634z"/>
  <path fill={fill} fill-rule="evenodd" clip-rule="evenodd" d="M440.372,21.043c0.255-6.505-0.509-14.028,0.383-19.895c4.081,0,8.162,0,12.243,0
  c0,17.472,0,34.944,0,52.416c-4.209,0-8.417,0-12.626,0c0-9.438,0-18.875,0-28.312l0.702,0.191l0.446-0.574
  c0.434-0.073,0.212-0.384,0-0.383l-0.191-0.957l-0.957,0.191c0-0.383,0-0.765,0-1.148l0.574,0.191l0.574-0.191
  c0.62,0.274,0.62-1.804,0-1.53l-0.574-0.191L440.372,21.043z M443.815,3.061C444.066,3.312,443.655,2.9,443.815,3.061
  L443.815,3.061z M444.198,25.634c0.128,0,0.255,0,0.383,0c-0.032-0.606,0.184-1.459-0.383-1.53
  c-0.202,0.308-0.399,0.621-0.383,1.147l-0.573-0.191l0.191,0.574c-0.07,0.325,0.148,0.361,0.382,0.382l0.574,0.191L444.198,25.634z
  "/>
  <path fill={fill}  fill-rule="evenodd" clip-rule="evenodd" d="M0,1.53c5.096-0.25,9.035,0.658,14.156,0.383
  c0.774,5.219,1.736,10.251,2.678,15.304c1.822-4.938,2.578-10.941,4.974-15.304c4.217,0.264,7.261-0.646,11.478-0.383
  c1.686,5.329,2.651,11.378,4.974,16.069c0.9-5.094,0.923-11.065,2.296-15.687c4.463,0,8.927,0,13.391,0
  c-0.936,3.554-1.495,6.949-1.913,10.713c-0.422,3.801-0.07,8.094-0.766,11.86c-0.337,1.83-1.631,3.524-1.913,5.356
  c-0.292,1.896,0.208,3.817,0,5.739c-0.186,1.72-0.962,3.326-1.148,4.974c-0.495,4.396,0.088,8.749-1.148,13.008
  c-4.463,0-8.927,0-13.391,0c-2.624-8.09-3.152-18.273-6.887-25.251c-0.395,4.707-2.89,7.312-2.678,12.625
  c-1.031,0.353-2.159-0.599-2.678,0.765c-0.288,1.764,1.321,1.088,1.53,1.913c-0.041-0.161-0.401,0.762-0.383,1.148
  c0.116,2.389-1.172,5.817-1.913,7.652c-4.487,0.641-10.024,1.361-13.391-0.765C5.941,35.608,2.834,19.476,0,3.826
  C0,3.061,0,2.295,0,1.53z M3.443,4.208c1.204-0.191,1.496,0.834,2.295,0C5.76,3.55,5.444,3.228,4.974,3.061
  C4.87,3.85,3.28,3.152,3.443,4.208z M11.478,16.834c-0.026,0.004,0.023,0.355,0,0.382C9.661,19.293,13.315,16.51,11.478,16.834z
  M13.391,41.321C13.642,41.571,13.23,41.16,13.391,41.321L13.391,41.321z M33.669,44.381
  C33.345,46.645,33.888,42.847,33.669,44.381L33.669,44.381z M18.748,48.208C19.19,49.719,19.19,46.696,18.748,48.208L18.748,48.208
  z"/>
  <path fill={fill}  fill-rule="evenodd" clip-rule="evenodd" d="M217.699,53.564c0.255-17.217-0.51-35.454,0.382-52.034
  c10.143,1.482,22.582-1.632,32.138,0.765c2.564,0.644,4.289,2.661,6.887,2.296c2.001,3.663,7.898,4.922,9.947,9.565
  c0.306,0.693,0.382,1.821,0.765,2.678c1.454,3.247,2.917,12.623,1.531,18.365c-0.355,1.472-1.685,3.771-2.678,5.739
  c-2.837,5.618-7.001,7.99-12.626,11.096c-0.217,0.12-0.314,0.9-0.765,0.765c-1.047-0.314-0.244-0.867-1.148,0.765
  C240.655,53.564,229.177,53.564,217.699,53.564z M232.621,37.877c-0.298,0.084-0.445,0.32-0.383,0.765
  c5.289,0.177,13.862,2.211,17.6-0.765C244.098,37.877,238.359,37.877,232.621,37.877z M236.446,43.616
  c-0.796-0.224-1.236-0.804-1.913-1.147c-0.029,0.666,0.085,1.19,0.383,1.53C235.874,43.511,236.114,44.193,236.446,43.616z"/>
  <path fill={fill}  fill-rule="evenodd" clip-rule="evenodd" d="M428.128,54.329c-0.51,0-1.02,0-1.53,0c-3.438-0.897-8.721,0.048-11.86-1.148
  c-0.291-6.213,0.819-13.828-1.147-18.365c-7.78,0-15.56,0-23.339,0c-1.356,5.147-0.551,12.458-0.766,18.748
  c-4.463,0-8.927,0-13.391,0c0-17.345,0-34.689,0-52.034c4.464,0,8.927,0,13.391,0c0,6.249,0,12.499,0,18.748
  c7.319,1.098,16.142,0.693,24.486,0.765c0.806-6.081,0.026-13.748,1.148-19.513c5.236-0.518,8.969,0.995,12.625,0
  C427.789,19.215,428.378,36.352,428.128,54.329z M399.051,24.486C399.301,24.737,398.891,24.326,399.051,24.486L399.051,24.486z
  M403.259,30.991C403.981,32.236,402.169,29.108,403.259,30.991L403.259,30.991z M388.721,32.138
  c0.064-0.958-0.588-1.198-1.148-1.53C387.734,31.339,387.711,32.255,388.721,32.138z M391.016,31.373
  C391.267,31.624,390.856,31.213,391.016,31.373L391.016,31.373z M418.181,37.495c0.106-0.872-0.092-1.438-0.766-1.53
  C417.309,36.836,417.508,37.403,418.181,37.495z"/>
  <path fill={fill}  fill-rule="evenodd" clip-rule="evenodd" d="M582.699,54.329c-0.51,0-1.021,0-1.53,0c-3.438-0.897-8.721,0.048-11.86-1.148
  c-0.291-6.213,0.819-13.828-1.148-18.365c-7.779,0-15.559,0-23.338,0c-1.357,5.147-0.551,12.458-0.766,18.748
  c-4.464,0-8.927,0-13.391,0c0.255-17.217-0.51-35.454,0.383-52.034c4.21,0.253,9.435-0.508,13.008,0.383c0,6.122,0,12.243,0,18.365
  c7.319,1.098,16.142,0.693,24.486,0.765c0.806-6.081,0.026-13.748,1.147-19.513c5.237-0.518,8.97,0.995,12.626,0
  C582.359,19.215,582.949,36.352,582.699,54.329z M553.622,24.486C553.872,24.737,553.46,24.326,553.622,24.486L553.622,24.486z
  M557.83,30.991C558.55,32.236,556.74,29.108,557.83,30.991L557.83,30.991z M543.291,32.138c0.065-0.958-0.587-1.198-1.147-1.53
  C542.304,31.339,542.282,32.255,543.291,32.138z M545.586,31.373C545.837,31.624,545.426,31.213,545.586,31.373L545.586,31.373z
  M572.751,37.495c0.106-0.872-0.093-1.438-0.766-1.53C571.879,36.836,572.079,37.403,572.751,37.495z"/>
  <g>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.4939" stroke-linecap="round" d="
  M484.945,7.46c0.255,0.209,0.51,0.299,0.765,0.383"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="1.2099" stroke-linecap="round" d="
  M483.16,41.895c-0.085,0.255-0.171,0.51-0.256,0.765"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.4939" stroke-linecap="round" d="
  M678.54,7.46c0.255,0.209,0.511,0.299,0.766,0.383"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="1.2099" stroke-linecap="round" d="
  M676.754,41.895c-0.085,0.255-0.17,0.51-0.255,0.765"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="1.2199" stroke-linecap="round" d="
  M129.637,25.443c-0.189-0.638-0.068-1.275,0.255-1.913"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.9469" stroke-linecap="round" d="
  M129.51,22.765c-0.252-0.638-0.051-1.275,0-1.913"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.4686" stroke-linecap="round" d="
  M131.806,25.06c0.504,0.29,0.731,0.685,1.147,1.148"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="1.2199" stroke-linecap="round" d="
  M441.074,25.443c-0.19-0.638-0.068-1.275,0.255-1.913"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.9469" stroke-linecap="round" d="
  M440.946,22.765c-0.253-0.638-0.052-1.275,0-1.913"/>
  <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#000000" stroke-width="0.4686" stroke-linecap="round" d="
  M443.242,25.06c0.504,0.29,0.73,0.685,1.147,1.148"/>
  </g>
  </svg>

function BasicExample() {

  const bandsInTown = () => {
    return (
      <div>
        <a
          className="bit-widget-initializer"
          data-artist-name="Weird Phishes"
          data-display-local-dates="false"
          data-display-past-dates="false"
          data-auto-style="false"
          data-text-color="#000000"
          data-link-color="#34367a"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit="15"
          data-display-start-time="false"
          data-link-text-color="#FFFFFF"
          data-display-lineup="false"
          data-display-play-my-city="true"
          data-separator-color="rgba(255, 255, 255, 0.5)"></a>
      </div>
    )
  }
  return (
    <Router>
      <div className='App'>
        <div className='nav-bar-wrapper'>
          <div className='container'>
            <div className='nav-bar'>
              <div className='logo-wrap'>
                <Link to="/">
                  <SVG />
                </Link>
              </div>
              <ul>
                <li>
                  <Link smooth to="#shows">
                    <h2 className='nav'>Shows</h2>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#videos">
                    <h2 className='nav'>Videos</h2>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#about">
                    <h2 className='nav'>About</h2>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#contact">
                    <h2 className='nav'>Contact</h2>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Route path="/about" component={About} />
          <Route path="/shows" component={() => <Shows bandsInTown={bandsInTown} />} />
          <Route path="/videos" component={Videos} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>

      <div className='container'>
        <div className='feature-wrapper'>
          <div className='video-wrapper'>
            <div dangerouslySetInnerHTML={{ __html: `<iframe width="100%" height="100%" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src="https://www.youtube.com/embed/CgpFKgbijf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }} />
          </div>
        </div>
      </div>


      <div className='divider' id='shows'>
        <h2>Shows</h2>
      </div>
      <div className='container'>
        <div className='feature-wrapper'>
          {bandsInTown()}
        </div>
      </div>

      <div className='divider' id='about'>
        <h2>About</h2>
      </div>
      <div className='container'>
        <div className='feature-wrapper'>

        </div>
      </div>


      <div className='video-section-wrapper'>
        <div className='divider' id='videos'>
          <h2>Videos</h2>
        </div>

        <div className='container video-section-wrapper'>
          <div className='feature-wrapper'>
            <div className='video-wrapper'>
              <div dangerouslySetInnerHTML={{ __html: `<iframe width="100%" height="100%" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src="https://www.youtube.com/embed/CgpFKgbijf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }} />
            </div>
            <div className='video-wrapper'>
              <div dangerouslySetInnerHTML={{ __html: `<iframe width="100%" height="100%" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src="https://www.youtube.com/embed/kpV7TVDs7qw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }} />
            </div>
          </div>
        </div>
      </div>


      <div className='divider' id='contact'>
        <h2>Contact</h2>
      </div>
      <div className='container'>
        <div className='feature-wrapper'>
          <div className='contact-card'>
            <p>Booking</p>
            <p>alexanderbglover@gmail.com</p>
          </div>
          <div className='contact-card'>
            <p>Socials</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className='hello'>About</h2>
    </div>
  );
}

function Shows(props) {
  return props.bandsInTown()
}

function Videos() {
  return (
    <div>
      <h2>Videos</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default BasicExample;