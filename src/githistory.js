const PATH_TO_FOLDER = '../slider';

import simpleGit from 'simple-git';
import fsFileTree from 'fs-file-tree'

const repo = simpleGit(PATH_TO_FOLDER);

export function getLog() {
    return new Promise((resolve, reject) => {
        repo.log((options, log) => {
            resolve(log)
        })
    });
}

export function getCommit(hash) {
    return new Promise((resolve, reject) => {
        repo.show(hash, (options, content) => {
            resolve(content)
        })
    });
}

export function getFS() {
    return fsFileTree.sync(PATH_TO_FOLDER)
}