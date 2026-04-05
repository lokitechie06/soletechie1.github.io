# SoleTechie — GitHub Pages Site

## 📁 File structure

```
soletechie-site/
├── index.html              ← Homepage (all 4 sections)
├── css/
│   └── main.css            ← Full design system
├── js/
│   └── main.js             ← Scroll reveal, filters, copy buttons
├── blog/
│   └── index.html          ← All posts with tag filter
└── posts/
    ├── _template.html      ← Copy this for every new post
    ├── amazon-kendra-deep-dive.html
    ├── aws-connect-reporting.html  ← (stub — fill in content)
    ├── terraform-lifecycle.html    ← (stub — fill in content)
    └── ...
```

---

## ✍️ Writing a new post

1. Copy `posts/_template.html` → `posts/your-post-slug.html`
2. Update: title, description, date, tags, content
3. Add a card to `index.html` (in the posts-grid section)
4. Add a row to `blog/index.html` (in the all-posts section)
5. Commit and push → auto-deploys in ~30 seconds

**Tag classes available:**
| Class | Color | Use for |
|-------|-------|---------|
| `tag-aws` | orange | AWS services |
| `tag-cloud` | cyan | General cloud |
| `tag-iac` | purple | Terraform, CDK, CloudFormation |
| `tag-data` | green | Data engineering, ETL |
| `tag-devops` | red | CI/CD, GitLab, Jenkins |
| `tag-tool` | yellow | VS Code, CLIs, utilities |

---

## 🛠️ Customization checklist

- [ ] Replace `🧑‍💻` in About section with a real photo using `<img>` tag
- [ ] Update your real name in About → `about-name`
- [ ] Update LinkedIn URL in About links
- [ ] Update certifications to match your actual certs (names, years, exam codes)
- [ ] Update skill bar percentages to honest values
- [ ] Replace patent/project descriptions with your real work
- [ ] Update `nav-badge` text if "actively posting" doesn't fit your cadence
- [ ] Add Google Analytics or Plausible if you want traffic stats

---

## 🎨 Design tokens (css/main.css)

Key CSS variables you might want to tweak:

```css
--green:  #00ff88;   /* primary accent */
--cyan:   #00d4ff;   /* secondary accent */
--bg:     #080b0f;   /* page background */
--bg2:    #0d1117;   /* card background */
```

To change the accent color from green to another color, do a find-replace on `#00ff88` and `rgba(0,255,136` in `main.css`.

---

## 📝 Adding Blogger post content

To migrate your existing Blogger posts:
1. Open each Blogger post, copy the text
2. Paste into a new `posts/slug.html` based on `_template.html`
3. Format with `<h2>`, `<p>`, `<code>`, `<pre>` tags
4. Add code snippets inside `<pre><code>...</code></pre>` for syntax styling

The copy-to-clipboard button on code blocks is added automatically by `main.js`.

---

Built by SoleTechie · soletechie.com
