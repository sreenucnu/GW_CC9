package perm

uses java.lang.Object
uses javax.annotation.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class Evaluation {
  static function edit (object :  Object) : boolean {
    return com.guidewire._generated.security.EvaluationPermKeys.EDIT.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function view (object :  Object) : boolean {
    return com.guidewire._generated.security.EvaluationPermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  
}