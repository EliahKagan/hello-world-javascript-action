# hello-world-javascript-action

This is a GitHub Action from the [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) tutorial, *but*:

- Also printing the Node.js version of the interpreter used to run the action.
- Currently targeting Node 16. As of this writing, new GitHub Actions should always target Node 20, but part of the goal of this action is to test the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE20` environment variable documented in [GitHub Actions; All Actions will run on Node20 instead of Node16 by default](https://github.blog/changelog/2024-03-07-github-actions-all-actions-will-run-on-node20-instead-of-node16-by-default/) and introduced to [the GitHub Actions runner](https://github.com/actions/runner) in [#3192](https://github.com/actions/runner/pull/3192).

## License

This uses code from the [MIT licensed](https://github.com/github/docs/blob/main/LICENSE-CODE) tutorial with only fairly minimal modification. Like the code in [the tutorial](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) ([whose repository is here](https://github.com/github/docs/blob/75d63ddd622df49090043db764897433719edc90/content/actions/creating-actions/creating-a-javascript-action.md?plain=1#L73)), this repository is licensed under the MIT license. See **[`LICENSE-CODE`](LICENSE-CODE)**, which is preserved from the tutorial repository. No further restrictions are imposed.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

### `node-version`

The version of Node.js. Also printed in the greeting.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@main
with:
  who-to-greet: 'Mona the Octocat'
```

 <!-- FIXME: Replace `main` with a version tag. -->
