

import type {Linter} from 'eslint';
import {parser, plugin, configs} from 'typescript-eslint';
const rules: Linter.RulesRecord = {
  // TypeScript 的 ts-expect-error 注释规则，关闭这个可以允许无警告使用 @ts-expect-error
  '@ts-expect-error': 'off',

  // 类型断言一致性，关闭允许使用 `as` 语法
  '@typescript-eslint/consistent-type-assertions': 'off',

  // 禁止使用 any 类型，这里关闭允许 any
  '@typescript-eslint/no-explicit-any': 'off',

  // 警告未处理的 Promise，防止忘记 await
  '@typescript-eslint/no-floating-promises': 'warn',

  // 允许传入 any 类型参数，不报 unsafe argument
  '@typescript-eslint/no-unsafe-argument': 'off',

  // 要求重载签名方法相邻写，保持类接口一致性
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // 数组类型声明风格，默认使用简单数组语法
  '@typescript-eslint/array-type': [
    'error',
    {default: 'array-simple', readonly: 'array-simple'},
  ],

  // await 后应该返回一个 Promise，可警告非 Promise 值
  '@typescript-eslint/await-thenable': 'warn',

  // ts-ignore、ts-expect-error 等注释策略，这里允许带说明的使用
  '@typescript-eslint/ban-ts-comment': [
    'warn',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
    },
  ],

  // 禁止 TSLint 的注释，关闭
  '@typescript-eslint/ban-tslint-comment': 'off',

  // 类文字属性风格，不强制
  '@typescript-eslint/class-literal-property-style': 'off',

  // 类方法必须使用 this 的检查，关闭
  '@typescript-eslint/class-methods-use-this': 'off',

  // 泛型构造函数一致性，保持一致风格
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

  // 索引对象风格一致性，不强制
  '@typescript-eslint/consistent-indexed-object-style': 'off',

  // 函数必须一致返回类型，不强制
  '@typescript-eslint/consistent-return': 'off',

  // 类型定义风格，强制使用 interface
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // 类型导出风格，强制统一
  '@typescript-eslint/consistent-type-exports': 'error',

  // 参数必须在最后定义，关闭
  '@typescript-eslint/default-param-last': 'off',

  // 点符号访问，允许索引签名访问
  '@typescript-eslint/dot-notation': ['error', {allowIndexSignaturePropertyAccess: true}],

  // 函数必须显式返回类型，关闭
  '@typescript-eslint/explicit-function-return-type': 'off',

  // 类成员可见性，不允许 public 显式写
  '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'no-public'}],

  // 模块边界类型声明，关闭
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // 初始化声明强制要求，开启
  '@typescript-eslint/init-declarations': ['error'],

  // 函数最大参数数量，不限制
  '@typescript-eslint/max-params': 'off',

  // 成员顺序检查，警告
  '@typescript-eslint/member-ordering': 'warn',

  // 方法签名风格，不强制
  '@typescript-eslint/method-signature-style': 'off',

  // 命名规范，不强制
  '@typescript-eslint/naming-convention': 'off',

  // 禁止使用 Array 构造函数
  '@typescript-eslint/no-array-constructor': 'error',

  // 禁止删除数组元素
  '@typescript-eslint/no-array-delete': 'error',

  // 禁止 base-to-string 产生意外转换，关闭
  '@typescript-eslint/no-base-to-string': 'off',

  // 禁止非空断言误用，关闭
  '@typescript-eslint/no-confusing-non-null-assertion': 'off',

  // 禁止 void 表达式误用，关闭
  '@typescript-eslint/no-confusing-void-expression': 'off',

  // 禁止使用过时的方法，关闭
  '@typescript-eslint/no-deprecated': 'off',

  // 禁止重复类成员
  '@typescript-eslint/no-dupe-class-members': 'error',

  // 禁止重复枚举值
  '@typescript-eslint/no-duplicate-enum-values': 'off',

  // 禁止重复类型成员
  '@typescript-eslint/no-duplicate-type-constituents': 'warn',

  // 禁止动态删除属性
  '@typescript-eslint/no-dynamic-delete': 'off',

  // 禁止空函数
  '@typescript-eslint/no-empty-function': 'off',

  // 禁止空接口
  '@typescript-eslint/no-empty-interface': 'warn',

  // 禁止空对象类型
  '@typescript-eslint/no-empty-object-type': 'warn',

  // 禁止多余的非空断言
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // 禁止在 for in 循环中使用数组
  '@typescript-eslint/no-for-in-array': 'off',

  // 禁止隐式 eval
  '@typescript-eslint/no-implied-eval': 'warn',

  // 禁止 import 类型副作用
  '@typescript-eslint/no-import-type-side-effects': 'error',

  // 禁止可推断类型显示声明
  '@typescript-eslint/no-inferrable-types': 'off',

  // 禁止使用无效 this
  '@typescript-eslint/no-invalid-this': 'off',

  // 禁止无效 void 类型
  '@typescript-eslint/no-invalid-void-type': 'off',

  // 禁止在循环中定义函数
  '@typescript-eslint/no-loop-func': 'off',

  // 防止精度丢失，关闭
  '@typescript-eslint/no-loss-of-precision': 'off',

  // 禁止魔法数字，关闭
  '@typescript-eslint/no-magic-numbers': 'off',

  // 禁止无意义 void 操作符
  '@typescript-eslint/no-meaningless-void-operator': 'off',

  // 禁止错误使用 new
  '@typescript-eslint/no-misused-new': 'error',

  // 禁止错误使用 promise
  '@typescript-eslint/no-misused-promises': 'off',

  // 禁止错误使用 spread
  '@typescript-eslint/no-misused-spread': 'error',

  // 禁止混合枚举
  '@typescript-eslint/no-mixed-enums': 'error',

  // 禁止命名空间
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',

  // 禁止重复声明
  '@typescript-eslint/no-redeclare': 'error',

  // 禁止 require 导入
  '@typescript-eslint/no-require-imports': 'error',

  // 禁止受限制的导入或类型
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-types': 'off',

  // 禁止变量遮蔽
  '@typescript-eslint/no-shadow': 'off',

  // 禁止 this 别名
  '@typescript-eslint/no-this-alias': 'error',

  // 禁止类型别名
  '@typescript-eslint/no-type-alias': 'off',

  // 禁止未使用的表达式
  '@typescript-eslint/no-unused-expressions': 'off',

  // 禁止未使用的变量
  '@typescript-eslint/no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],

  // 禁止在使用前定义
  '@typescript-eslint/no-use-before-define': 'error',

  // 禁止无用构造函数
  '@typescript-eslint/no-useless-constructor': 'error',

  // 禁止空导出
  '@typescript-eslint/no-useless-empty-export': 'off',

  // 禁止 var require
  '@typescript-eslint/no-var-requires': 'error',

  // 禁止包装对象类型（new Number, new String 等）
  '@typescript-eslint/no-wrapper-object-types': 'off',

  // 非空类型断言风格
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',

  // 只能 throw Error
  '@typescript-eslint/only-throw-error': 'error',

  // 参数属性检查
  '@typescript-eslint/parameter-properties': 'off',

  // prefer as const 用法
  '@typescript-eslint/prefer-as-const': 'error',

  // 优先解构数组或对象
  '@typescript-eslint/prefer-destructuring': 'off',

  // 枚举初始值风格
  '@typescript-eslint/prefer-enum-initializers': 'error',

  // prefer find 方法
  '@typescript-eslint/prefer-find': 'warn',

  // for-of 循环优先
  '@typescript-eslint/prefer-for-of': 'error',

  // 优先函数类型
  '@typescript-eslint/prefer-function-type': 'error',

  // includes 方法优先
  '@typescript-eslint/prefer-includes': 'warn',

  // 枚举成员字面量优先
  '@typescript-eslint/prefer-literal-enum-member': 'off',

  // prefer namespace keyword
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // prefer ts-expect-error
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  // promise 函数必须 async
  '@typescript-eslint/promise-function-async': 'off',

  // getter/setter 配对检查
  '@typescript-eslint/related-getter-setter-pairs': 'off',

  // 数组 sort compare 要求
  '@typescript-eslint/require-array-sort-compare': 'off',

  // async 函数必须有 await
  '@typescript-eslint/require-await': 'off',

  // 限制模板字符串表达式类型
  '@typescript-eslint/restrict-template-expressions': 'off',

  // 返回 await
  '@typescript-eslint/return-await': 'off',

  // 类型成员排序，关闭
  '@typescript-eslint/sort-type-constituents': 'off',

  // 严格布尔检查
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // 三斜杠引用检查
  '@typescript-eslint/triple-slash-reference': 'error',

  // 类型必须声明
  '@typescript-eslint/typedef': 'off',

  // unbound method 检查
  '@typescript-eslint/unbound-method': 'off',

  // 函数重载签名检查
  '@typescript-eslint/unified-signatures': 'warn',

  // 缩进检查
  '@typescript-eslint/indent': 'off',

  // 以下是普通 JS 规则，类似关闭默认 ESLint 的重复检查
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  'no-unused-vars': 'off',
  'init-declarations': 'off',
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-class-assign': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-with': 'off',
  'no-duplicate-imports': 'off',
};

export interface TypeScriptConfigOptions {
    tsconfigRootDir?: string;
    project?: string;
}

export function configureTypeScript(options: TypeScriptConfigOptions = {}): Linter.Config[] {
  const {tsconfigRootDir, project} = options;
  return [
      ...configs.recommended,
        {
            files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.mtsx', '**/*.cts', '**/*.ctsx'],
            rules,
            plugins: {
                '@typescript-eslint': plugin,
            },
            languageOptions: {
                sourceType: 'module' as const,
                parser: parser,
                parserOptions: {
                    project: project ?? './tsconfig.json',
                    tsconfigRootDir: tsconfigRootDir || process.cwd(),
                },
            },

        },
    ];
};


