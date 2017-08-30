
module.exports={ //(this file is read by some other person)module.exports = {
    entry:__dirname+'/index2.js', //(current directory name)//here we are writing es6 code
    output:{
    path:__dirname,
    filename:'bundle.js' //here will be the ES 5.1 code
},
devServer : {
    inline: true, // if you see a file change (build re run and re render)
    port:3333
},
module:{
    loaders : [
    {
    test: /\.js$/, //all the files which are with extension render that files
    exclude: /node_modules/, //not been transpiled
    loader: 'babel-loader',
        query: {
        presets : ['es2015', 'react', 'stage-1']
        }
    }]

}
} 


