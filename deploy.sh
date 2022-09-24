set -e
npm run build
cd dist
git add -A
git commit -m 'deploy'
git push -f git@github.com:AlexanderTemp/ReactCSSTransitionsExamples.git main:gh-pages
cd -