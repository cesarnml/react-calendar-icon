import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'
import json from 'rollup-plugin-json'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Bundling for ${mode}...`)

const plugins = [
  nodeResolve(),
  commonjs({
    ignoreGlobal: true,
    namedExports: {
      'node_modules/react-is/index.js': [
        'isElement',
        'isValidElementType',
        'ForwardRef'
      ]
    }
  }),
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false, loose: true }], '@babel/preset-react']
  }),
  json()
]

if (prod) {
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))
}

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
  'styled-jss': 'styled',
}

export default {
  input: 'lib/index.js',
  output: prod
    ? [{ file: 'dist/react-calendar-icon.min.js', format: 'umd', globals, name: 'ReactCalendarIcon', exports: 'named' }]
    : [
      { file: 'dist/react-calendar-icon.js', format: 'umd', globals, name: 'ReactCalendarIcon', exports: 'named' },
      { file: 'dist/react-calendar-icon.cjs.js', format: 'cjs' }
    ],
  external: ['react', 'prop-types', 'styled-components', 'styled-jss'],
  plugins,
}
