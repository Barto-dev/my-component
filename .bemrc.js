module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: ["css",'html'],
                    levels: {
                        "src/blocks/modules": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
