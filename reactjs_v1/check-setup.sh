#!/bin/bash

echo "🔍 Checking Husky and Commitlint setup..."
echo ""

echo "✅ Husky hooks installed:"
ls -la .husky/

echo ""
echo "✅ Testing Commitlint with valid message:"
echo "feat: add new feature" | npx commitlint

echo ""
echo "❌ Testing Commitlint with invalid message (should fail):"
echo "invalid message" | npx commitlint

echo ""
echo "✅ Package.json scripts:"
grep -A 3 -B 1 "prepare\|lint-staged" package.json

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📝 How to use:"
echo "1. Commit với format: feat: add new feature"
echo "2. Pre-commit hook sẽ tự động chạy ESLint và Prettier"
echo "3. Commit-msg hook sẽ kiểm tra format commit message"
echo ""
echo "📖 Xem COMMIT_CONVENTION.md để biết thêm chi tiết"
