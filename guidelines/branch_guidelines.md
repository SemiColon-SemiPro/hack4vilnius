# Branching

## Quick Legend

<table>
  <thead>
    <tr>
      <th>Instance</th>
      <th>Branch</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Working</td>
      <td>master</td>
      <td>Accepts merges from Features/Issues and Hotfixes</td>
    </tr>
    <tr>
      <td>Features/Issues</td>
      <td>feature</td>
      <td>Branches off master, PR required.</td>
      <td>feature/add-new-button</td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>bugfix</td>
      <td>Branches off master, PR required.</td>
      <td>bugfix/fix-button-bug</td>
    </tr>
  </tbody>
</table>

## Main Branches

The main repository will hold one main branch:

- `master`

The main branch should be considered `origin/master` and will be the main branch where the source code of `HEAD` always reflects a state with the latest delivered development changes for the next release. We will be branching and merging from `master`.

## Supporting Branches

Unlike the main branch, supporting branches always have a limited life time and should be deleted once merged into master.

The different types of branches we may use are:

- Feature branches
- Bug branches

## Working on a branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub.

```
$ git checkout feature/add-new-button
// creates a local branch for the new feature/bug

$ git push origin feature/add-new-button
// makes the new branch remotely available
```

Periodically, changes made to `master` (if any) should be merged back into your feature branch.

```
$ git merge master
// merges changes from master into branch
```

When development is complete, make a pull request and delete the remote branch once merged.

```
$ git checkout master
// change to the master branch

$ git merge feature/add-new-button
// merge locally to master

$ git push origin master
// push merge changes to remote

$ git branch -D feature/add-new-button
// deletes the local branch (only after it's merged)
```

Don't forget to delete the branch remotely, too (you can do it easily on GitHub).
