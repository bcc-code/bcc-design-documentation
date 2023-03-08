---
sectionOrder: 100
---

# Developing npm packages
Several npm packages are part of the BCC design system, such as [@bcc-code/vue-components](https://github.com/bcc-code/bcc-vue-components) and [@bcc-code/design-tokens](https://github.com/bcc-code/bcc-design-tokens). These packages are developed in their own repositories and versioned independently.

## Versioning
All packages are versioned according to [SemVer](https://semver.org/). The current state of the design system means that none of the packages can be considered stable. Therefore they start at v0.1.0 and will continue to be a 0.x version until we consider both the package and the design system in a state where we can recommend any BCC project to start using it.

While packages are 0.x, any minor version (such as 0.2.0) might contain breaking changes. Patch versions should generally not contain breaking changes.

After a stable 1.0 is reached, no breaking changes will be introduced in a minor version.

## Releasing a new version
To release a new version of any of the BCC design system packages (such as `@bcc-code/vue-components`), first create a Git tag and update the `package.json`. The easiest way is to use `npm version`:
```sh
npm version 0.1.0
```

Then push this tag to GitHub:
```sh
git push --follow-tags
```

This will automatically create a new release in GitHub. Maintainers can publish this release, after which the new version will be pushed to npm with the `latest` tag.

### Dev version
Every push to the `main` branch will automatically publish a release with the `dev` tag, and versioned like `0.0.0-dev.3dbe49f`, with the latter part being the sha of the commit. This makes it possible to install code that hasn't been officially versioned yet.

