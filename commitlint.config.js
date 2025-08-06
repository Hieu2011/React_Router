export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Tính năng mới
        'fix',      // Sửa bug
        'docs',     // Cập nhật documentation
        'style',    // Thay đổi code style (formatting, missing semi colons, etc)
        'refactor', // Code refactoring
        'perf',     // Cải thiện performance
        'test',     // Thêm hoặc sửa tests
        'chore',    // Thay đổi build process hoặc auxiliary tools
        'ci',       // Thay đổi CI configuration files và scripts
        'build',    // Thay đổi build system
        'revert'    // Revert commit trước đó
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100]
  }
};
