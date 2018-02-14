# Blarglefish Scouting App
> A Quasar project

This and others READMEs in the repo serve as living documents and the source of truth for our development practices.

## Resources
For more information about how what to do to the app to improve as well as where to find information,
check [Resources.md](https://github.com/blarglefish1255/blarglefish-scouting-app/blob/master/Resources.md)

## Development

## Standard Process

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

```bash
# Ensure that you are up-to-date
git fetch

# Reset master branch
git reset --hard origin/master

# Checkout a branch (include no spaces but instead use '-')
git checkout -b "feature-being-added"

# Add changes to branch
git add "absolute/path/to/file"
# Or add all changes
git add .

# Create a commit with what you the changes did
git commit -m "what you changed goes here"

# Push changes
git push origin "feature-being-added"
```

### Commits

#### Format

Describe the change you made. If someone on a different development team (i.e. not familiar with our app) read your commit history, they should at least have a vague idea of what you did.

To make describing your changes easier, more frequent, smaller commits are generally better. These can be made any time you know (or at least think you know 😉) the app works and all tests pass, even if a feature isn't completely finished. For example:

1. add hotkey button to welcome page
2. make input pop up when hotkey button clicked
3. update hotkey input to collect user-defined hotkey when in focus
4. sync hotkey input to vuex state
5. save hotkey vuex state in electron settings

Note that no one does this perfectly. Those are the commits I wish I had made, rather than the commits I really made. 😅 At the very least though, it's good to avoid including more than one feature in a single commit, unless they're tightly coupled.

A few other notes:

- Capitalization does *not* matter in commits - do whatever you're comfortable with.
- Commits should generally be kept to a single sentence, but it can be a long sentence if you want. It's OK if you go over the limit for a commit title and spill into Git's commit description field.

#### Imperative vs past tense

Some people have strong opinions about whether to use the imperative (e.g. `add`, `fix`) or past tense (e.g. `added`, `fixed`). I (Cameron) personally don't care, since both are easily understandable when browsing commit history.

#### Referencing issues/PRs

If a commit closes an open issue, add `, fixes #123` to the end of a commit, `123` being the GitHub id of the issue. You can also use `, replaces #123` to reference pull requests we'll be closing.

### Features

To ensure frequent communication, all features will be done in feature branches (we can even disable pushing to `master`). Here's a good process for starting a new feature:

#### Start a new feature

``` sh
git fetch origin # Make sure your local origin is up-to-date
git checkout master # Move to the master branch
git reset --hard origin/master # Ensure your local master matches GitHub's
git checkout -b my-feature-branch # Check out your feature branch
```

#### Rebase frequently

As you develop, it's a good idea to **rebase after every commit** to address conflicts as soon as they arise:

``` sh
git fetch origin # Make sure your local origin is up-to-date
git checkout my-feature-branch # If you're not already there
git rebase origin/master # Rebase against GitHub's master branch
```

#### Resolve rebase conflicts

**If you encounter conflicts**, you'll see `CONFLICT` in the output of the last command for each conflicting file. At the end, you'll also see:

```
When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

If you run `git status` at this point, you'll see a list of the conflicting files listed under "Unmerged paths". Each file in this list will contain one or more blocks of code that look similar to this:

```
<<<<<<< HEAD:src/renderer/app.vue
    font-size: 1.3em;
=======
    font-size: 1.5em;
<<<<<<< master
```

What it's saying above is that _someone else_ changed the same section of code that you did. Now you have to decide which of your changes to keep, or to combine them. In this case, let's say you want to keep the change from master. You'd change the code above to:

```
    font-size: 1.5em;
```

> NOTE: Do **NOT** try to manually resolve conflicts in `yarn.lock`. Instead, it's best to delete the file (`rm yarn.lock`) and regenerate it (`yarn install`).

When you've resolved all conflicts, you can `git add` the file (in the example above, `git add src/renderer/app.vue`). And when _all_ conflicting files are added and resolved, you can run `git rebase --continue`.

> Note that **you probably shouldn't ever need to run `git rebase --skip`**, because it assumes that master can just overwrite anything you did, which generally isn't safe. It's sort of like Googling with the "I'm feeling lucky" button - you don't really know where you'll end up. 😄

If you make a mistake in the middle of a rebase, you can `git rebase --abort` and try again.

> If you're using VS Code, might want to check out [this overview](https://www.youtube.com/watch?v=AKNYgP0yEOY) of its Git integration, as it can help make complicated tasks like resolving conflicts easier.

#### Check your work

When you're ready to submit your work in a PR, first rebase one more time and review your changes with:

``` sh
git fetch origin # Make sure your local origin is up-to-date
git checkout my-feature-branch # If you're not already there
git diff origin/master # List differences between your branch and master
```

This will give you a chance to catch and clean up any accidental changes, leftover debugging code (e.g. `console.log`), etc. It's essentially giving _yourself_ a code review before someone else does and is a nice courtesy. 🙂

#### Push to your branch

``` sh
git push origin my-feature-branch --force
# The --force will be necessary if you've rebased since your last push
```

And open a pull request on GitHub. Before merging into master, each feature must be reviewed by at least one other team member.

### PR Updates

If you're reviewing a PR and want to make some updates yourself before merging, make sure:

1. You communicate with whoever owns the PR and receive their explicit consent before making changes. Otherwise, they might also make changes and accidentally overwrite your work.
2. This isn't a change the owner of the PR could be guided to make themselves and would learn from. On a team with remote members, PRs are a great opportunity to share expertise, but "just taking over" will lead to siloed knowledge and slower development in the long run.

### PR Merging

GitHub has several ways for us to merge PRs:

- **Rebase & merge**: Preferred for most PRs, with meaningful commits that tell a story and always have the app in a working condition.
- **Squash & merge**: Preferred for bugfix PRs, which will often only have one commit, or multiple meaningless commits, such as: `fix bug, fixes #123`, `ok, really fixed bug now`, `bug even fixed on windows`, etc. Also preferred for PRs that have gone through a lot of iteration/troubleshooting, where the app is not always in a working condition.

### Troubleshooting

If you've been working on the same problem, without success, for more than an hour, reach out for help immediately (even someone who might know less about the problem than you do). It's amazing how much another pair of eyes can help, as well as the opportunity to explain and answer questions on what you're working on.
