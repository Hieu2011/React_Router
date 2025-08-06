# Git Commit Message Convention

Dự án này sử dụng [Conventional Commits](https://www.conventionalcommits.org/) để đảm bảo commit message nhất quán.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: Tính năng mới
- **fix**: Sửa bug
- **docs**: Cập nhật documentation
- **style**: Thay đổi code style (formatting, missing semi colons, etc)
- **refactor**: Code refactoring
- **perf**: Cải thiện performance
- **test**: Thêm hoặc sửa tests
- **chore**: Thay đổi build process hoặc auxiliary tools
- **ci**: Thay đổi CI configuration files và scripts
- **build**: Thay đổi build system
- **revert**: Revert commit trước đó

## Ví dụ

```bash
feat: add user authentication
fix(auth): resolve login redirect issue
docs: update README with installation steps
test: add unit tests for user service
chore(deps): update dependencies
```

## Scope (Optional)

Scope là phần tùy chọn để chỉ rõ phạm vi của thay đổi:

- `auth`: Authentication related
- `ui`: User interface
- `api`: API related
- `db`: Database related
- `config`: Configuration files

## Rules

- Sử dụng chữ thường cho type và scope
- Không kết thúc description bằng dấu chấm
- Giới hạn header trong 72 ký tự
- Sử dụng imperative mood trong description ("add" không phải "added")

## Pre-commit Hooks

Dự án đã được cấu hình với:

- **ESLint**: Kiểm tra và tự động sửa lỗi code
- **Prettier**: Tự động format code
- **Commitlint**: Kiểm tra format commit message

Nếu commit message không đúng format, commit sẽ bị từ chối.
