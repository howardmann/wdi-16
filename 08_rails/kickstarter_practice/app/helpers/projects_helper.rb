module ProjectsHelper
  def own_project?
    @current_user.present? && @project.user == @current_user
  end

  def already_pledged?
    @current_user.present? && @current_user.pledges.pluck(:project_id).include?(@project.id)
  end

  def format_sum_amount(project)
    if project.sum_amount > 0
      number_to_currency(project.sum_amount)
    else
      "No pledges yet"
    end
  end

end
