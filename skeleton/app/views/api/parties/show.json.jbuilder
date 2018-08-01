guests = @party.guests

json.name @party.name

json.guests guests do |guest|
  json.name guest.name
  json.gifts guest.gifts do |gift|
    json.title gift.title
    json.description gift.description
  end
end
