![Build Status](https://gitlab.com/pages/jekyll/badges/master/build.svg)
![Jekyll Version](https://img.shields.io/gem/v/jekyll.svg)

# Macaw

## Using Jekyll locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Jekyll
1. Download dependencies: `bundle`
1. Build and preview: `bundle exec jekyll serve`
1. Add content

The above commands should be executed from the root directory of this project.

Read more at Jekyll's [documentation][].

## Troubleshooting

1. CSS is missing! That means two things:
    * Either that you have wrongly set up the CSS URL in your templates, or
    * your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

---

[Learn more about GitLab Pages](https://pages.gitlab.io) or read the the [official GitLab Pages documentation](https://docs.gitlab.com/ce/user/project/pages/).

[ci]: https://about.gitlab.com/gitlab-ci/
[Jekyll]: http://jekyllrb.com/
[install]: https://jekyllrb.com/docs/installation/
[documentation]: https://jekyllrb.com/docs/home/
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages
