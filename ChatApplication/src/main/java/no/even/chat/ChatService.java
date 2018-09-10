/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package no.even.chat;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

/**
 *
 * @author Even
 */
@Path("chat")
@Stateless
public class ChatService {
    @PersistenceContext
    EntityManager em;
    
    @GET
    public List<Message> getAllMessages()  {
        return em.createQuery("select m from Message m",Message.class).getResultList();
    }
    
    @GET
    @Path("create")
    public Message create(@QueryParam("message")String message) {
        Message result = new Message(message);
        
        em.persist(result);
        
        return result;
    }
}
