# Commands & < arguments >
## pwd
Lists the present working directory
## cd < directoryName >
Changes present working directory to PWd/directoryName
## mkdir < newDirectoryName >
Makes a new directory in present working directory
## rmdir < directoryName >
Removes directory
## touch < fileName >
Makes new file in PWD called fileName
## rm < fileNAme >
Removes a file
## ls < directoryName? >
Lists all files in PWD or directoryName
## clear
Clears text off Terminal
## mv < filename1 > < filename2 >
To rename filename1 to filename2 
## open < folder/file name >
To open the file or folder
## open .
Opens the current folder
##cp < filename1 > < filename2 >
To copy filename1 to filename2


###Special Directories
~ - Homes
.. - Up a level
. - same level
/ - The root directory

# GIT commands (all start with "git")
When pushing to github:
1. This adds files to changelist
    - `git add .` or `-A` or `--all` to add everything or git add `< filename >` for specific changes

2. `git commit - m "Some commit message"`
    - if you forget `-m` you will be in the vi (inline text editor), type `i`, then type your message, press esc key, then `:wq` and hit enter key

3. [Optionally] `git pull`
    - Use this only if there are other changes not already in your local copy

4. `git push < server >  < branch >`
 - you can usually just do `git push`

## clone < repoURL >
Downloads reposisitory to your local PWD
## init
Starts a local git repository
## add < file/folder >
Starts trackingfile/folder (or use "git add ." which will track everything)
## commit < -m? > < message? >
Takes snapshot of directory
## push < server? > < branch? >
Send your commits to the server
## pull < server? > < branch? >
This receives commits from server.