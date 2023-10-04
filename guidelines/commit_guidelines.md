# Committing Code

## General Rules

Make [atomic commits](http://en.wikipedia.org/wiki/Atomic_commit) of changes, even across multiple files, in logical units. That is, as much as possible, each commit should be focused on one specific purpose.

## Commit Messages

~ **Commit title**: a single line that's no more than about 50 characters and that describes the commit concisely.
Best practice is to use the imperative present tense when creating a commit. This should reflect the logic: "If implemented, this commit will...". Examples:

- Use "Add tests for" instead of "Added tests for"
- Use "Fix exception" instead of "Fixed exception"

~ **Issues**: to associate commits with GitHub Issues, indicate one or more issue number and (optionally) a state change for the story. The commit message should start with square brackets containing a hash mark followed by the issue number. For example:

    [#123] Add new button

To automatically close an issue by using a commit message, include "Closes" in the square brackets in addition to the issue number. For example:

    [Closes #123] Add new view

~ **Description**: (Optional) For more detailed explanations, create a blank line, followed by a description.

## Message Template

Template for commits:

```
$ git commit -m "[<optional state> #optionalissueid] summary of changes

More detailed explanatory text, if necessary.

Further paragraphs come after blank lines.

- Bullet points are okay, too"
```
