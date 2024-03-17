# hello-world-javascript-action

This is a GitHub Action from the [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) tutorial, *but*:

- Also printing the Node.js version of the interpreter used to run the action.
- Currently targeting Node 16. As of this writing, new GitHub Actions should always target Node 20, but part of the goal of this action is to test the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE20` environment variable documented in [GitHub Actions; All Actions will run on Node20 instead of Node16 by default](https://github.blog/changelog/2024-03-07-github-actions-all-actions-will-run-on-node20-instead-of-node16-by-default/) and introduced to [the GitHub Actions runner](https://github.com/actions/runner) in [#3192](https://github.com/actions/runner/pull/3192).

## License

This uses code from the [MIT licensed](https://github.com/github/docs/blob/main/LICENSE-CODE) tutorial with only moderate modification. Like the code in [the tutorial](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) ([whose repository is here](https://github.com/github/docs/blob/75d63ddd622df49090043db764897433719edc90/content/actions/creating-actions/creating-a-javascript-action.md?plain=1#L73)), the code of this action is licensed under the MIT license.

See **[`LICENSE-CODE`](LICENSE-CODE)**, which is preserved from the tutorial repository. Dependencies vendored in the `node_modules` directory have their own licenses. No further restrictions are imposed.

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
uses: EliahKagan/hello-world-javascript-action@main
with:
  who-to-greet: 'Eliah'
```

## Results of the experiment

On 17 March 2024, about 10 days after the [announcment](https://github.blog/changelog/2024-03-07-github-actions-all-actions-will-run-on-node20-instead-of-node16-by-default/) documenting it, setting `FORCE_JAVASCRIPT_ACTIONS_TO_NODE20` does not seem to have any effect.

- [Test using the action implemented in this repository.](https://github.com/EliahKagan/hello-world-javascript-action/actions/runs/8313584426/job/22749724550#step:4:8)
- [Auxiliary test](https://github.com/EliahKagan/hello-world-javascript-action/actions/runs/8313584425/job/22749724552#step:2:15) using [github-script](https://github.com/actions/github-script) instead.

However, I wonder if the reason is that, as of this time, no new release of [the runner](https://github.com/actions/runner) has been made since the feature was added. Specifically:

- Recognition of that environment variable appears to have been implemented in [a pull request](https://github.com/actions/runner/pull/3192) opened on 7 March 2024, the same day as the changelog announcement, and [merged](https://github.com/actions/runner/pull/3192#pullrequestreview-1934887919) on 13 March 2024.
- In contrast, the latest release of the runner as of this writing was [v2.314.1](https://github.com/actions/runner/releases/tag/v2.314.1) on 27 February 2024.

So my hope is that this will start working as of the next release (or very shortly thereafter as it is rolled out for use in all repositories).
