import React, { useState } from 'react';
import "./app.css"
import List from "./components/List"
interface dataState {
  people : {
    name : string,
    age : number,
    url : string,
    note: string
  }[]
}

function App() {
  const [people,setPeople] = useState<dataState["people"]>([
    {
      name : "cristiano",
      age : 36,
      url : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUVFRUYFRUVEg8VEBUVFRUWFhUVFRUYHSggGBolHRYVITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tLS0tLS0rLS0tLS0tLS0tLS8tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgcBAP/EAEQQAAIBAgQDBgQCBwUHBQEAAAECAAMRBBIhMQVBUQYTImFxgTKRobFCwQcUI1Jy0fAzYpKy4RUkNENTotJjc4LC8Rb/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAMhEAAgIBAgQDCAIBBQEAAAAAAAECEQMhMQQSQVEFE2EicYGRocHR8DKxIxRCguHxFf/aAAwDAQACEQMRAD8AxrtPUi6VIYNBs03oP4dpZ0HlHSqRyjWjExUi1JgMQNJ9TqaQWJaWAVWOEzmNl9jXlDijrAIAoJLCkIrREZpn/wDTsLbkwWhsJDKnl1l5gey9WoneMyqCbKos9RjYsVsD4TYeZ12OtoYTGUcLT7zVqzMVRgzhFWwzZkOhJv6iw6mVP+28SxDC2QAjIl7eIG5B1N+ep9eUDlC81rYt6XDMOr0RVRnV2cVHJqKqjxhGVkayqCqXzL+I62Fyt/sXDvUKrVCi91BDZ7c1LFrEg3GwOgOt5SY/ieviAGlrEHMD6i9v62le2PbS1zbUXvmB8m3Hzh0A8j7mh4hwnu2y2I/da4ZG8gfwkeY+msXFEjcW/rUesBT7QMy5X12B21h8Ni12LeHl1tytpy1EjRSlqe1BpEW3j9cRIjWChjQxSjtIRBXjNKrGVoAtw1QwZka9WDWpBSGNjNJYVqUHhzeNWlSDi0JOLQd4xWWAyQBzmjzDrD5ICgY8ktiIw0BIbRuiYrUhsO0OLAnEtqBntddILDvJ4h44zlLjxKDFby/xrSgxe8Ah7RMfw1O552BB0JF7EEC4lXTeaHglLNSqNa5BQeQ0Y3MGT0CjuV+JTNlByg6/Cb77XAGh2+fOP4Xs+BlbvUzkrlp5G765YC5BGw1Ynawh8Bwy5ZgTe/w2FtTuxtoNb+02w4iq0gqFSyiwANvFte34heJlOh8MdszOH7DUgLOST7RXF9jKY+BjNHRSo3O0IcK3NohZZGl4odUYRuxznZx7mNr2KdUDA52H4MwBPPSa98CTbXXqL/KBrUWpgMTcX0BvrC82XUB4IdDCiuWLAggqbWO402iz7x/iSWdzsWcEj1Gv2ldmmiKvUWtqJgwitaCBhQsdYEkePVgzUnr0pEUpcUgGWWBaPgyrw+kepvJNAxlQRkvI93PHqWge+mcbZCit42FsIlhLxyCzXzKgNWerVtIVDrBtLTFSplhQxMnWxItKxGg61WN5jPKJPFVZSYp9YevWMRqNJYtnoaafsfVv3qaHRWtfXw5gfvMtTW5A2uQL+s6hS4g9NlJFIomZaamlTBRASoUEDX3ic+VRVPqaOGwSyXJdPvf4F8LSzlVt4bXPmxGl/Qfeah8Ph8LQ7yvck/AijUgc7nlf+hJ8I4aKgFTk1vIqLRHtZwCrWqaMciqqjTYAcpm6mhKlSMnxHtuQTkoIByBYk29jPMB2uNTw5SrdRtp0gMd2TIGXfW+b8Z5WMPwPssUcOdwdvfpGNRaFrzE/QYxXaJqYu4YX1A525GJYXtfVdiFpprzex0HTpLbthwQ1WUjkuo66yiwvZF3ckDLa2xFhbew31kjFJepc3O66AOPnxKdQXGYi9wDcg28tDKdDNV2np93Rp0zTTPYftCo73R28IffLbW3nMmDNOKnETNOL+o0ojFBYrSaOUzLbJEnUSCyRgT0JImFQOmIZXkbSLCSUiuSz6tUi1568jlgguI7R0jAMRRowlWA0GmessEywjPPhKTosCRFq8dqCV+JMNASEK5ipEYqmDRYxGdntJJ0js6lHEUFNSoEaird5mFw1jdOd7tfoec5/TWWGDZlN1JB8ovLDnRo4fK8TtHWqXE++Ysh2ZgTYgEXBv1Gh+kR4nx5lYi+n5SXZ9f8Ad1q3PjUZv4gWViP8MzfFWu5O0wO06NtrdDVfixbXT8ofhXFaVIF8RVCqTYA7n08tpS91qByMtMZTwzUx3opgWsruVB03y8zDg7JIssVx3D1A2V1v+C+xJ5SvHENb2sesqeGYDDB7nunAN0HeLy6An6Q+NtmYrexJ33HlClsAvVCPbTFmotEk63fboMoB+8yxEs+Mt+0C/uqo+fiP+aVpE1YnUUZ8i1slRMeQRCkuseQ6S5FRCgyTPBsZAvKLboKhk2MArz3NKYyLs+M8yz4CTvKRHQulSHRooqxhIxmeI0J8INYQRQ0FUMra7R6sYjiIxCpMSYwlIQZhKMMTuxykscoiL04VXgDUje9nsYf1VV86ie4OcfRvrKTEPqR5xns3rh2PNa1x7ov8oljHUsXQ8zofWYpL22bov2EHrjw3HSwlRW4TXdy4ekw0sr7gDla/2lkz5lFjA4jhjsLrUyn1uZIOmVJJ7lZW4FiW/wCig5m9j7czLegCEsxuRYX6xTDcNbdq17cj+UI7FUbXUBiPYQ5O9ELpR2TKTiVTNUY+f2FvyiwWEnjTXFUhMpE6YjAiSExqnKaJFhSYnVeHcxKvIi5B0eMI0rKVTWOIZGioyHBPrSFAxnJKDsAKcIKcIs8YwGylGj4CRdp60WqNIiwVYxKoYzVbSI1DGREyIGHw6xcR3DCEwIrUcpLJMsLhKLNoqliBc2F7Dqeg8zOn9jP0ZK4FXGlraFaSgqreTsdSPIADXcwFqzS1yx5nsZPspSf9WrOQchdQrfhLKrZsvW11vK6tR8WnPT1nXO19JO6VEUIqILKoCqo3sFG285XiCA3mDMc37bo0443jVldis9EWYEdDqR/pK1uIsT8U1mOxoalla3S8yuJoqG8IhRYrJBolQxTX3MeFyjk75G+xiiLtpLnhVFGZVqAlCbPY2bKdGseRtL0tEjF6mUzQtOaHtr2DxWALVLGthr6V1Hwg7Cqo+E+e3pe0zWHabTGhhVhlEGIanAY1AKpizpeM1V1h6dIASIktStpYexjlNI1Tpxinh5bKgqPsHhryy/UZ9gKctbCHCKaJJmTUySxZXhA0zjpE3aJ1RGJ4ywwGVtYGLZCSAASToAASSegA3m97J9g6+P8AFnWlSG7EFqja28CDfYi5I951Ds92OwOCv3aGrV2ZiBWr+mUeCmPXSEnoRYuZ03Xwt/8AhxLhnYTiFYZlw+ROdSs6UqY82LG4+U3PA/0a4aknfcQxi5BqEp50VvSowDVB/Ao8jOk8Q4hh6IviKiUjbwqzLVxI/hQXVD/CCJi8d2/wyN/uuEFWp/165DOT1vq3/cIEp0a8HBeZ/CMn8VXzqvdSb9FoaThH6qqD9XwndUU8Xf4hAlDT/mKpOaq3Rjr5y37M8Vo1zV7qpVqFWBZqugOYWBpjkvhOlhOX43jWJxPir1CRuEGlNfRR9zrHuyPGlwtdWY2pOMjnoCdH9j9CYpZvaR0svg7/ANPKv5Volrs7at6t9q5VdaXqaPtLTIqV0b9zOnmrbW9CCPbznKMUl2nfOP8ADxWS62zqrZDp4gw1QnobKfVROFVaTBnVlKsGIIIsQeYIi8sOWV9zlYMvPCimxrki14ql4as9jaeKo3lIjuyaiaXslw1q9ZUA0uDUPIIDr7nYeZlPwXhlXE1BTpLmPPkqj95jyH9C87DwPhNHA0CWYAKM1WqdLkfkNgPPqYzHDmd9BeTJy6LdllxfE5UBZK7Jm8ZoDN3YsRnZfxpqbrYi19NJzztB2Iw1Qd9QanQLnw1FueG1CdgTq2Fc8wbrfTeV/E+2uI/WjXo1XpgeFVvdMobQMmxJ1J9dNpq+BcdTFEtRNOjim0rYap/weLHkp2e3PfrmGsb5lvQ1y4CeLEnkV9dHt6Pt2b1j3SftLlvFuDV8M2SvSZCfhJsUcdUceFh6GJ8p2wjD2NFr4Uv8WExid5gG65CdFFz8SkekznHf0f0yboDhXPw5mNXh1QnYJX+KkTyDjyEJSsyzwSjtre3drutWn/xcl3Zy8nWOUheF4xwethqhp16ZRh12PQqRoRFUq2hIQ009R2msN3gAiIxEDWr3lMJUXmFriWP6wJj0xhWG/wBq+cZGVAMUptDZ4qDCKpMQjXPENU3j3CsCa9VKY2J8R6INWPy+pEUpU7TX9kcNkpvWO7+Ff4VOvzb/ACyT0QfD8P5mRR/aNRhOOU8MxDq/d5Mq06bZFuPgDm48Nr/PYyj4x23xD+GiVw9PklEZN+rLuf6tKziGIzGovRQfe8zmY63mfmbPTvhsSfM42/XVaem1+tX6jVaoWvdt9WPM9desNhV2tK+/1ljQfImc77KPzlD4u3bHa2I1FNd+cjxSuEAS9z+L+UVw9cUkNVtXb4B0H70qg7ObmVRJZK0W51HsB23XKuFxTWA0pVGPhtypueVuROltDa2uv45wDD4kXqJ47aVEIWppsCbWYeoM4KRLjg/avGYYBadUlBtTYBkA6BTqo8lIjo5NKeqODxnhXNPzML5W+nT4Vt7qr3Gl4h+jAM10xLKL7NQDH5hx9o1gP0b0lt3tR6nkAtJT66k/IiV1P9Jda3iw9InqC6j5En7xbH/pFxTC1NKVPzCMzj3Y2/7YV4+xg/8An8a3qkvW19tfodBSnhcFRJOSjSXU8rm3+J2PuTOX9su2D4tsiXSgp8KHRmP79S27dBy9ZQ8Q4jWrtnrVGqNyLG4F+SjZR5CJESpTvRbHQ4Tw5YHzyfNL6L3evqxhRDKb84HBvc2M8qkqbRR109LRreG9u8XSHd1cmKpbFKy5xboGbX5/KajgXaTCOLYbEHCMfiw+IPe4E33UE6qDf4rj0nKM8+DwlJmTJwmKV17N9tn74u4v5X2aep3DiGDp1lWjiqSoraJ4gcMxN7HCYj/lsf8ApuLGwAA3nKu2/ZM4FhlqCpTe+W+lZNbFaqctxqN4bsz2urYW6G1WgdHoVPFTYHfKD8J8/mDJcSxhxXeXO9+7BZmygG9Nbk3IXQaxnmIxPw6cm03ok69/x1Wu+rvu9KxjNBGrCskH3cZZyJY6BlrzzLDd3Pe7ksOOG0Tpi8ew9OAp045RMqmjVOSYxQwzOyoguzsFUdWY2A+ZnQeOcNOFVaR+FVAU6gmwF7+et7+fras/R1h17/v3IAp+FCfh72oCAdxsubmNWXUTW/pZpf7ilYMCUK+IG4YWOt+fP5yZIXAHg+K8riox6PR/Hb6nLHq/tG8w32J/KVlN7++v1tD06t3Bvv8AYiKYdtB6H6MZlPSSlqhuml28hp/MyVbEA+Jv7NdFHNyPy6mLtXAW3l+0POx/CPMyFGiahzNoo2XkBykJz/7Y7ngLVWzNt+XQRtVA2lhQ4NWei1enTPcUvibS17gGw3Nrgm2wiIkLhyu6dtb+/wCxEiRtJNBhtZC3oemRcSdjBOZYLIETwiSMNh8K73yKTtcgaC+1zsJLAbS3EXuDcRwuKi5uY3/nLQdnzlGYi52Fha1tNTbW9uXWw0lLicO+HqEHVbkXtoRexlKcZaJio5YqVdH+2QM+cyTjptykIaDloeppLPBVLN9ZTV/w+sdpVdV9JTJjlWnYJxagFqEgaN4h77j53lc0v8emekDzQ/Q6H62lQ1CNhqjiccljytd9Ra09tI1dJDvJGmBjyKh9Fkg1pNYzwrC97WVMuYXzMLEgqurA25Hb3jpOgMeNypHUOFcHfC4bBkKzVH/asiix7xypALWOuXIvll85P9KNQpwzumILXUXGxZdalvK5I9pct2zprSBJFwADdirDrcBTc/w7+XLmnbftEcYGNstNTlVeo3/ODkyx5dGVwfAZ5Z1LJBxUXbtNba0u/wADD0KmgP7pnlSplL/3S3yJJ/OBQ/X+vvAcQqWPrlv9j9hEJHWyZnCHN2/fsi0wdLNbPsNT1dz0mx7N8D7671g6UVvYUxR8TDfMXYWUcztyuDMpwkEpe/xbnn6DoJc4fjGIpKEp1nRQSQA7AAnc/U/OBavU1uGWWD/E6brV9v3b7nWhXppdO5sndqlWmncLTOYEBkDOtk/tEuwW+gFyLTk3HeGPQqWYMFa70sxQsUzEKWykgHqLyB7QYq//ABNbe/8Aa1N7Wvv0ieKxtSpY1HZyBYZnZiB0F9hDlJMycDwWXhpNtpp773pt+9tATGeU11kC0+V4B0mxi4/rnAVRrPmYwbtICe3mg4RTqU8O9cAFMx0vc8luVOgIPr8R02mclhwmqNaZIs9j4icnQg9ORv5dbQJxbX9+7qIzx5ktt9b7fvU1GFwdNqdOpXZs1ZVYZTUW2YE72sdjc3NtL7xTG0UDmjWUNZVZeeYMLgA3FtDc7236yxuvdUadS9qAYKygstRVWwBUGwcdbgak6RLiGNZcS2Ky5QVICPbKFRQpDW1vcDTz5zBjeSTd3tLrpafspNbWtXvXWnRzop9ujvptotfxr98UlszJfQMcutxa+ms+KawXE8QWqGowALsQQBp4jB0MVfQ7rOpT3NsMqVQluiWJbb1ljw3hlas6LSpsxc5VNrLcAsbudBYAmVVc6gTofYridOnhK5qkhaVWxK2zotUKuZfQ5jprpzlpJszcRxE8UXKCt2l8/wDuh/hPY7wWetTZmRWancqESo11qFud0ViNBrl5azH1MGRoRYjQjoRuJreJcfwwomlRPfVO7p0WqC4ptRVWC9P2nw3sLab8pXqhqjvGtmclmsLDMSc1hy1vH4qujkcX584LNk2ei0rpe3bevyzJYrCeUS7iariGFsJTdzDa1M0JtIgJ0r9FPBfBVxLBSHIpqG/dRgz+XifINf3DOZISTYC5OgHUnYToFGvUw9NEpVGQrYEq5GtvEfmSfeKlNQpnWxcNLi4OEGltv/Rd9quF4epYk1KLMxQWCFM6qRqrHKbuFUKrg3c3PhIHMMZ4VqJcNlqtZlvlqKCVDgcgbXtNlV7YuilDkA8dyqKrEvnLZgPCwLMHIt4ioveYzjWMWrVZ0QIrFiqAABbkm1hpv0gZJQktNx/AcNxfD5HDK/YS01tXtp1XyXaiiGx94njCTb5Ry+/rEMU1vmJIbgcXJLHqaHhlSyAfu6e/OMO8rcC+Wn5tr7TcUuwOIKh2r4dEsDneswWx1GuW0Vyts6f+rx4scFklVrT9+RlS0iWm1o/o4rOuZcVh3X95XeovzCzIcZwDYevUoOQWpkAlb5TcBgRfyIl8rS1Kx8bhyvlhK2vf90KM89VoAtPg0sLn1Gbz4mBDT7NKoLnRO8+MHmn2aWDzj2G4pUUZQbgcioPqL725b7GAxWMep8bk63tst+thzi0gWlcq3E8sVrRDHfCb+x9JW99YxqrUOq9RpK6m2sdBaHM4rL7arqWuHbMw8oRxdj6meYBLfefA6n1gPc3QT5FzdSz4WbG01PAK/gZT+FvoRf7hpkcGbGXXDK2WqejKfmNR+crHKph8Xi8zhpR7a/IteIEGVGURjF4iId7NjZ5pY2h/sFgRV4hhUZbr3mYjlamjVNfK6ido412RwtRTYGkeqHT/AAm4nEOHVqlKor0XZKgNlZTZhm0/ObRe1fEKWZiy16AJt3oy1PMK6AaeoMTKcepr4fDxUrnw8q5a61v9H+0VnaLsRiaZLUmWsvS2Wpb+Emx9j7TB4ymyNldWQjdXBVh7GdSw3bzDVdHLUG6VLZPZxp87T7ihp11tURainY6MPVTy9jFuMeg5eJ8RB8ueN/R/g47W3MSqEZhebPjPAKOYmg5VR18Sk88vO3rMc6DORe9ja/IyRDyZlkrl6scwyljczpXEOG4rEYDDLRVm7ui7N8Vv7RqagD8T5UX0BJNpgMCu06Hja2KoYLD4jDs4pvQalWAzWVlqVAG01U+LRhaxUQL37G7JBwjCUGue9G+7T+r6etCHBOFcQwGTEik+QH9tTIObIDr3idLahhe3lLLinDsJX4rVo1xWzVXpd01NqaqAaCsc97nptKbhmLx+NK4UVajUy96jFnY5Da5djqQANF2vylr2sxgwvFVxGQsFFM5QQCRkK7+30hRar0Ms4ZPOlGTXmckq5bWzTjd9/wCin4z2U3bCo4VO9utarSNWoKL5XqUqa6lBKyp2SxQVW7tfEaQyh6ZdTWYLSzre6hiQNZoH7eXpMuWqlS1UIUq0xTtVYlTUUoSSoNtN/scduMPkVVoVFAbCtkDUu6T9XqJUZaYAB1y7ny6S3yioy4yEa5b1+P8AZnl7F4+9u4vqRo9I2I5HxaHoDvF8XwRlp0WXMXepUoumWxSsjqAnqQ6H59JdJ2ro6XSprxT9cNsh8H7m+r7eXnPsN2nph8VUIa5rvXwosPDWPeopfXSy1Eb1pCU0ug2OXi+sNvfr0rd7Xzf8Sj4vwM03yUmaqwd08FKoATTyhih1DjMWGm2UE7ynYMu9xvuCNjY7+c2vCeMUBhlos6h8rXar+srTF6pcqXpeK5UIdNLrYz6px/Dk9+5V3o1nFJMrgOrLSHeFWJNhkqNqb5mWTQnn5YS5XButL2vVpPtT0Xp6mJaqwOltYJMSL6jLOlJhsMFqJTCOKbPmdf1a1qgYqCz65daaXXXNT85he0dnr1CAoGZlUKqqoVSVXQeQGslBQ4mWRvlW2uv7penzKjHixvAYVlJ84apqLH2iNNSG0jI7UZc03HKpJaPoXNBrGSUayWFqhhruJN1ijrwjcU07C0W1EssO1nU9bfWVdFZbYLDPV8NJDUYckVjb1Ow94PU0RcVFuWi9SFViYHujH8TQKsysLMrEMNDYg6jToYLJNNnm9OgbCkK2ZrhVBJI302t5k2HvI8WxldkAqYkYdbeCgou4XkX53O+v0lvwilRFN6lQm6EEAC7CwNiBzbe3z9KDHcUUXNPBkAk+Os1nY9TeZ3udngsajgTlervZ/DbX1+JTu5O7X89ryOEx9WjfuqjLfQgHwn1U6T7EcRRhrTKtysRaLP1lpAZnCez5v31LkcaqVQVcJYW1C2Pp0mepJr7ywpCyjz1g+61+cY1yxObw6WTNJR2X51HMENpsuF9t8Th6S0VFJkS9gyZjZiWIJDC4uTMlhFh2ERbWx6KWDHkgo5IqS9TU0v0h4pAclPDoOi0ABf0zSg4xxiri2NasVL6L4VCqFF7C3ufnK6toJOgPAZOZtbmfHwuHFO4RSdChn1560jCIz55JDPHE8UyE6koFxDAyNZZCprQ+wjA6Ge1VtpFaZsbyxdswBlUXjfNGnuinxK+ULwbBirUIYkC1gRbRuX5yWIbpGuDXUZ+Za49tP5xsdjkcYuV2mO//AMtiAfDkYdcxX6GWmA7H4h/ienTHqzsPbQfWKUO1pQlXoKbG11crf2IP3ja9tyPgwo9WrEj5BfzlV3ExzcVXsL6I0/C+xmFS3eFqzf3jZP8ACv5kzU56GHpjMaVBOWYoi+w5/Wcmx/bXHMPCyUl6Uk8Vv4muflaK1E74d4WzMd2ZmZ/Qkm8vmUdkFDgM/EP/ACzqum7/AAWuOrh61VgbhqtQg9QXYg/KRyxGixvr/XWN54d2JacJOPbQsuL4HIiq71mfKDlw5ACk620Fv/kxJ+0yOMqVl+M1Lf8ArKlVfc2us23HuH0wxsKQOtz4u8J6ly9zMnisNbrbyYn5X29niE9T07xtQXLa06Ov35lXXYNslNrDXIT8xrF6bDYX9D/OTrU7Ndbnr+GoP/KfI6m55jy+sNKzl5sjjcnuvrXZ/wDoWo8PSFx7H7ytepLXBDRfQfXWNz7Ix+DO87Xp90M4dYxbrI0lk25zGeq6CWJaGwg8Bi1W/ON4MaS+giOs2JOIOFcawZhoQz0yMmJEiQpklkmW4kEMJtKZaE2QwmGfkY1cdJCpTvtJYPlOLtCmIS0tOHUv2S+h+5iNZbnXb85ecOofskP92HE53Hqq95neJ08tU+YB/L8oFGln2jpWZD6j5W/nKtvLSE0Bw7fIhukCw8ofhNfI+VvhOn+sr6ITnUynrraPmgTaxBPXlAZ0MTbqS3XqmXNSlrp/X9Xku5M8wThl8xe/9e0btGQ2OTxunET/AHdJjfGGNzd6Q/ipVkHsS9pQV6Z3CofNCR9fF95qOJ6k61PbvLTP4nCg63N/NPzKA/WIPUuNoo8QlzzB8xr9N4ni2sLadfOWeLUbP7HUj/SUvFG8dt7Kv1F/zjsSuRxPFPYwy9Wl9/sLFpoUp206ZfoJRcOp5qqL1db+l9ZpD8R94Wd7Iz+B4755+5f3+UMJrrPi1pDDnlDMJlPSdCtrvcxzCbRR11jWFlvYRD+TFsQNTAmM4seKAIhIXNUyF7T55IrefDaWLroBJjdFriLVUkKT2MjBjJwlrsPrT6wlUACwnqnMNN4JbjeCa9tuoKonKafgKZsPT9CPkxEzjazUdkVvhx/dYj6X/ONxbnJ8UVQT9Sm7YYW1JW6Pb5g/yEyyMRyuJ0rtDgw9CovPLmHqviH2t7znNNW5GHPRmLhHzR06DOFF9l9DbX5RxKZAsouesrsh/FU+RjeGpN/yzpzZnv8AS+kUzr4n0r8/JWW+BoBFPU7/AEh++iefwHUGzDXQQH6zDgrRyfEdM7rsjXcRpZjtmP8AiI/lKPGUwN1HyE0+Koq9Z0cXVV0XUL7gfF73mb42gRyqAKOgAAiT1HNa2Kio3v5H8pQY1b1X6X/IS8rynO59T94/DucDxp/44x9ft/2H4HR/boemY/JWMtSNRE+B/wBoP4H/AMhjzbe8HP8AyHeCRS4eXrJ/0iSaGEaRblJNEnZFGGsPh4BoWhLErc8xo1EWjWO5RWQCf8j6fSUg0IB6EXEC6w5npkFyjYDD4gqZYlwYmtMdIKqxvI0SM3Bdx/LaX/Y2t4Ki9GB+lv8A6zPYXVdZbdlfif0/8YWL+QrxGKlwzfZX9TTVWBnNOIYXu6jKbgBiL8iOX0tOg1GmU7QG1Rbcxr57R+bRJnJ8PSlKS9L+qX3KmmF5XMOqddPLl8hBd4Tpf5afaETQaTMdlJDjPem4HRfkHEr85j+H+Fv/AG2imWOxPQ5fikbyRl6fd/k//9k=",
      note: "wonderful player amazing personality respect to you"

    }
  ])



  return (
    <div className="App">
      <h1>people invited to my party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
