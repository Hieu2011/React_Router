# React Router Project

Dự án React Router với Husky và Commitlint được setup ở level root.

## 🚀 Quick Start

```bash
# Cài đặt tất cả dependencies
npm run install:all

# Chạy development server
npm run dev

# Build dự án
npm run build

# Chạy production server
npm start
```

## 🔧 Available Scripts

### Root Level Scripts:

- `npm run dev` - Chạy development server
- `npm run build` - Build dự án
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint
- `npm run lint:fix` - Sửa lỗi ESLint
- `npm run prettier` - Kiểm tra format code
- `npm run prettier:fix` - Format code
- `npm run typecheck` - Kiểm tra TypeScript
- `npm run install:all` - Cài đặt dependencies cho cả root và reactjs_v1

## 🐶 Git Hooks (Husky)

Dự án đã được setup với Husky ở root level:

### Pre-commit Hook:

- Tự động chạy ESLint --fix
- Tự động format với Prettier
- Chỉ áp dụng cho files đã staged

### Commit-msg Hook:

- Kiểm tra format commit message theo Conventional Commits
- Từ chối commit nếu message không đúng format

## 📝 Commit Message Convention

Format: `<type>[optional scope]: <description>`

### Types:

- `feat`: Tính năng mới
- `fix`: Sửa bug
- `docs`: Cập nhật documentation
- `style`: Thay đổi code style
- `refactor`: Code refactoring
- `perf`: Cải thiện performance
- `test`: Thêm hoặc sửa tests
- `chore`: Thay đổi build process
- `ci`: Thay đổi CI configuration
- `build`: Thay đổi build system
- `revert`: Revert commit trước đó

### Ví dụ:

```bash
feat: add user authentication
fix(auth): resolve login redirect issue
docs: update README with installation steps
test: add unit tests for user service
```

## 📁 Project Structure

```
React_Router/
├── .git/                    # Git repository chính
├── .husky/                  # Git hooks (Husky)
├── package.json             # Root package.json với Husky setup
├── commitlint.config.js     # Commitlint configuration
└── reactjs_v1/              # React application
    ├── app/                 # Application source code
    ├── public/              # Static assets
    ├── build/               # Build output
    └── package.json         # App dependencies
```

## 🔄 Git Workflow

1. Tạo commit với format đúng:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

2. Pre-commit hook sẽ tự động:
   - Chạy ESLint và fix lỗi
   - Format code với Prettier

3. Commit-msg hook sẽ kiểm tra format message

4. Nếu tất cả pass → commit thành công ✅
   Nếu có lỗi → commit bị reject ❌

## 🎯 Benefits

- ✅ Code quality được đảm bảo
- ✅ Commit history rõ ràng và nhất quán
- ✅ Tự động format code
- ✅ Team collaboration tốt hơn
- ✅ CI/CD friendly
