## Title
E-commerce SPA project based React.js  

---
glitch server : https://flannel-darkness.glitch.me/  
netlify : https://react-ecommerce.netlify.com/

users : admin, user, user2  
password : (0ne letter!)

---
### Spec
- React, Scss, BootStrap UI, axios, json-server
- Use Context API for React state management instead of redux



### component structure

structure design for component reuse
- contexts :  component to manage react state per page in one place 
- pages:  component to represent only the component structure of the page 
- containers: A component that collects the necessary components for each page
### git control

1.  Create `feature` branch
2.  Check current branch location on VS CODE and Terminal
3.

```
git add, commit -m '...'
git push origin `feature`
```

4.

```
git checkout
```

5.  Check current branch location is on `Develop`
6.

```
git merge `feature`
git push origin develop
```

7.  To delete the `feature` branch

```
git branch -D `feature`   (local)
git push origin --delete `feature`    (remote)
git branch
```

