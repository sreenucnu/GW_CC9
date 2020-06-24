package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/group/TeamGroupOtherClaims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamGroupOtherClaimsExpressions {
  @javax.annotation.Generated("config/web/pcf/team/group/TeamGroupOtherClaims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamGroupOtherClaimsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Group :  Group) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=TeamGroupOtherClaims_Print) at TeamGroupOtherClaims.pcf: line 52, column 25
    function action_5 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewWithOptions(PrintTargetLV)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=TeamGroupOtherClaims_Assign) at TeamGroupOtherClaims.pcf: line 39, column 25
    function allCheckedRowsAction_2 (CheckedValues :  entity.ClaimTeamView[], CheckedValuesErrors :  java.util.Map) : void {
      AssignClaimsPopup.push(new gw.api.claim.ClaimAssignmentPopup(CheckedValues))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=TeamGroupOtherClaims_RemoveFlag) at TeamGroupOtherClaims.pcf: line 45, column 76
    function allCheckedRowsAction_3 (CheckedValues :  entity.ClaimTeamView[], CheckedValuesErrors :  java.util.Map) : void {
      TeamClaimRemoveFlagPopup.push(gw.api.team.TeamUtil.convertViewArrayToSingleClaim(CheckedValues))
    }
    
    // 'available' attribute on ToolbarButton (id=TeamGroupOtherClaims_Print) at TeamGroupOtherClaims.pcf: line 52, column 25
    function available_4 () : java.lang.Boolean {
      return perm.User.printlistviews
    }
    
    // 'canVisit' attribute on Page (id=TeamGroupOtherClaims) at TeamGroupOtherClaims.pcf: line 8, column 67
    static function canVisit_8 (Group :  Group) : java.lang.Boolean {
      return perm.User.viewteam
    }
    
    // 'def' attribute on PanelRef at TeamGroupOtherClaims.pcf: line 55, column 59
    function def_onEnter_6 (def :  pcf.TeamClaimsLV) : void {
      def.onEnter(ClaimTeamViewList, FilterSet)
    }
    
    // 'def' attribute on PanelRef at TeamGroupOtherClaims.pcf: line 55, column 59
    function def_refreshVariables_7 (def :  pcf.TeamClaimsLV) : void {
      def.refreshVariables(ClaimTeamViewList, FilterSet)
    }
    
    // 'initialValue' attribute on Variable at TeamGroupOtherClaims.pcf: line 17, column 46
    function initialValue_0 () : gw.api.team.TeamClaimFilterSet {
      return new gw.api.team.TeamOtherClaimFilterSet(Group)
    }
    
    // 'initialValue' attribute on Variable at TeamGroupOtherClaims.pcf: line 22, column 83
    function initialValue_1 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ClaimTeamView.finder.findStaleOrFailedAssignmentsByGroup(Group)
    }
    
    // Page (id=TeamGroupOtherClaims) at TeamGroupOtherClaims.pcf: line 8, column 67
    static function parent_9 (Group :  Group) : pcf.api.Destination {
      return pcf.TeamGroupOtherGroup.createDestination(Group)
    }
    
    property get ClaimTeamViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getVariableValue("ClaimTeamViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ClaimTeamViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setVariableValue("ClaimTeamViewList", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.TeamGroupOtherClaims {
      return super.CurrentLocation as pcf.TeamGroupOtherClaims
    }
    
    property get FilterSet () : gw.api.team.TeamClaimFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.team.TeamClaimFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.team.TeamClaimFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get Group () : Group {
      return getVariableValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setVariableValue("Group", 0, $arg)
    }
    
    property get PrintTargetLV () : java.lang.String {
      return getVariableValue("PrintTargetLV", 0) as java.lang.String
    }
    
    property set PrintTargetLV ($arg :  java.lang.String) {
      setVariableValue("PrintTargetLV", 0, $arg)
    }
    
    
  }
  
  
}