package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/question/QuestionRowSet.BooleanSelect.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class QuestionRowSet_BooleanSelect extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Question :  Question, $AnswerSetContainer :  gw.api.question.AnswerSetContainer) : void {
    __widgetOf(this, pcf.QuestionRowSet_BooleanSelect, SECTION_WIDGET_CLASS).setVariables(false, {$Question, $AnswerSetContainer})
  }
  
  function refreshVariables ($Question :  Question, $AnswerSetContainer :  gw.api.question.AnswerSetContainer) : void {
    __widgetOf(this, pcf.QuestionRowSet_BooleanSelect, SECTION_WIDGET_CLASS).setVariables(true, {$Question, $AnswerSetContainer})
  }
  
  
}