if(window.api.apiVersion == "v2"){
  window.api.apiVersion = "v2-v1"
  var mod = new Mod({
      version: 1,
      name: "v2-v1 Bridge",
      id: "v2_v1_bridge",
      type: "plugin", // has literally 0 use right now
      permissions: [
        "WRITE_LEVEL",
        "ADMIN",
        "MODIFY_ACHIEVEMENTS"
      ],
      onReady: (res) => {
          if(res.hasPerms){
              window.api.showAch = function(name, desc, callback){
                  mod.grantAch('__tmp__', name, desc).then(() => {
                      callback(mod.clearData())
                  })
              }

              window.api.setCustomLevel = function(levelData){
                  mod.removeLevels()
                  mod.addLevel('v2_v1_bridge_level', 'v2-v1 Level')
              }

              window.api.toggleCustomLevel = function(state){
                  window.__experimentalForceToggleLevelDoNotUseUnlessOnlyOneModIsLoaded(state)
              }
          }else{
            throw new Error("v2-v1 was unable to obtain the permissions needed to run!")
          }
      }
  })
}
