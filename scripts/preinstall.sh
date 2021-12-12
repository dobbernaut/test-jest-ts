#!/bin/sh

# Colourful terminal output helpers
GREEN='\033[0;32m'
NC='\033[0m'

echo "${GREEN}Setting git pre-commit hook from ./githooks/pre-commit ${NC}"
rm -f .git/hooks/pre-commit # remove any existing pre-commit hook from previous installs
cp scripts/githooks/pre-commit .git/hooks # copying pre-commit hook to .git/hooks
echo "${GREEN}Done${NC}"
